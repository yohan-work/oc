const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const TEMPLATE_DIR = path.join(__dirname, '../templates');
const AGENTS_DIR = path.join(__dirname, '../agents');
const SKILLS_DIR = path.join(__dirname, '../skills');

// Ensure directories exist
if (!fs.existsSync(AGENTS_DIR)) fs.mkdirSync(AGENTS_DIR, { recursive: true });
if (!fs.existsSync(SKILLS_DIR)) fs.mkdirSync(SKILLS_DIR, { recursive: true });

const ask = (question, defaultVal = '') => {
    return new Promise(resolve => {
        rl.question(`${question} ${defaultVal ? `(${defaultVal})` : ''}: `, answer => {
            resolve(answer.trim() || defaultVal);
        });
    });
};

const createAgent = async () => {
    console.log('\n--- Create New Agent ---');
    const name = await ask('Agent Name (filename, e.g., code-reviewer)');
    if (!name) return console.log('Name is required!');

    const description = await ask('Description');
    const model = await ask('Model', 'anthropic/claude-sonnet-4-20250514');
    const temperature = await ask('Temperature', '0.1');

    const write = await ask('Tool: Write Access? (true/false)', 'false');
    const edit = await ask('Tool: Edit Access? (true/false)', 'false');
    const bash = await ask('Tool: Bash Access? (true/false)', 'false');

    const instructions = await ask('Instructions (System Prompt)');

    const template = fs.readFileSync(path.join(TEMPLATE_DIR, 'agent.md'), 'utf8');
    const content = template
        .replace('{{description}}', description)
        .replace('{{model}}', model)
        .replace('{{temperature}}', temperature)
        .replace('{{tool_write}}', write)
        .replace('{{tool_edit}}', edit)
        .replace('{{tool_bash}}', bash)
        .replace('{{instructions}}', instructions);

    const filePath = path.join(AGENTS_DIR, `${name}.md`);
    fs.writeFileSync(filePath, content);
    console.log(`\n✅ Agent created at: ${filePath}`);
};

const createSkill = async () => {
    console.log('\n--- Create New Skill ---');
    const name = await ask('Skill Name (folder name, e.g., api-design)');
    if (!name) return console.log('Name is required!');

    const description = await ask('Skill Description');

    const resp1 = await ask('Responsibility 1');
    const resp2 = await ask('Responsibility 2');
    const resp3 = await ask('Responsibility 3');

    const usage1 = await ask('Usage Scenario 1');
    const usage2 = await ask('Usage Scenario 2');
    const usage3 = await ask('Usage Scenario 3');

    const guide = await ask('Guide / Usage Instructions');

    const template = fs.readFileSync(path.join(TEMPLATE_DIR, 'skill.md'), 'utf8');
    const content = template
        .replace('{{name}}', name)
        .replace('{{description}}', description)
        .replace('{{responsibility_1}}', resp1)
        .replace('{{responsibility_2}}', resp2)
        .replace('{{responsibility_3}}', resp3)
        .replace('{{usage_scenario_1}}', usage1)
        .replace('{{usage_scenario_2}}', usage2)
        .replace('{{usage_scenario_3}}', usage3)
        .replace('{{guide}}', guide);

    const skillDir = path.join(SKILLS_DIR, name);
    if (!fs.existsSync(skillDir)) fs.mkdirSync(skillDir, { recursive: true });

    const filePath = path.join(skillDir, 'SKILL.md');
    fs.writeFileSync(filePath, content);
    console.log(`\n✅ Skill created at: ${filePath}`);
};

const main = async () => {
    console.log('Welcome to Agent Factory 🏭\n');
    console.log('1. Create Agent');
    console.log('2. Create Skill');

    const choice = await ask('Select an option (1/2)');

    try {
        if (choice === '1') {
            await createAgent();
        } else if (choice === '2') {
            await createSkill();
        } else {
            console.log('Invalid option');
        }
    } catch (err) {
        console.error('Error:', err);
    } finally {
        rl.close();
    }
};

main();
