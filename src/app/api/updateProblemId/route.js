import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// Define the path to the problemId.json file
const filePath = path.join(process.cwd(), 'public/problemId.json');

// Handle GET request (fetch problemId)
export async function GET() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    return NextResponse.json({ problemId: jsonData.problemId });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read problemId' }, { status: 500 });
  }
}

// Handle POST request (increment problemId)
export async function POST() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);

    // Increment the problemId and pad it to 10 digits
    const nextProblemId = (parseInt(jsonData.problemId, 10) + 1)
      .toString()
      .padStart(10, '0');

    // Update the problemId.json file
    jsonData.problemId = nextProblemId;
    await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));

    return NextResponse.json({ problemId: nextProblemId });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update problemId' }, { status: 500 });
  }
}
