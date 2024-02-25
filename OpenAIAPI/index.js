require('dotenv').config();
const OpenAI = require('openai').OpenAI;
const openai = new OpenAI()

const freeTime = ["11:30AM - 1:30PM", "5:00PM - 8PM"];
const task = ["hitting the gym", "writing an essay", 'cooking']

async function main() {
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: "user",
                content: `free time: ${freeTime[0]}, ${freeTime[1]}, tasks: ${task[0]}, ${task[1]}, ${task[2]},
                could you divide these times to fit all tasks( 1 task at one). response in format (time):(task)`
            }
        ]
    })
    console.log(response.choices[0].message.content)
}


main()