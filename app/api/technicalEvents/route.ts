// // api/technicalEvents/route.ts

// import { getDbConnection } from ''; // Adjust path accordingly
// import { NextRequest, NextResponse } from 'next/server';

// // Handle POST and GET requests for Technical Events
// export async function POST(request: NextRequest) {
//   try {
//     const { usno, eventType, worksDone, eventDate, awardGiven } = await request.json();

//     const pool = await getDbConnection();

//     // Insert the data into the database
//     await pool
//       .request()
//       .input('USN', sql.NVarChar, usno)
//       .input('EventType', sql.NVarChar, eventType)
//       .input('WorksDone', sql.NVarChar, worksDone)
//       .input('EventDate', sql.Date, eventDate)
//       .input('AwardGiven', sql.NVarChar, awardGiven)
//       .query(`
//         INSERT INTO TechnicalEvents (USN, EventType, WorksDone, EventDate, AwardGiven)
//         VALUES (@USN, @EventType, @WorksDone, @EventDate, @AwardGiven)
//       `);

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error inserting data:", error);
//     return NextResponse.json({ success: false, error: error.message });
//   }
// }

// export async function GET() {
//   try {
//     const pool = await getDbConnection();

//     // Fetch data from the TechnicalEvents table
//     const result = await pool.request().query('SELECT * FROM TechnicalEvents');

//     return NextResponse.json({ success: true, data: result.recordset });
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return NextResponse.json({ success: false, error: error.message });
//   }
// }
