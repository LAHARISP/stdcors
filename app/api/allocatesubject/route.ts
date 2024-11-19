import { ConnectionPool, sql } from "mssql";
import { NextApiRequest, NextApiResponse } from "next";

const dbConfig = {
  user: "sa",
  password: "collegeproject",
  server: "localhost",
  database: "Course_Reg",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

let pool: ConnectionPool | null = null;

const getConnection = async () => {
  if (!pool) {
    pool = new ConnectionPool(dbConfig);
    await pool.connect();
    console.log("Database connection established.");
  }
  return pool;
};

 export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log("API Request Method:", req.method);
  console.log("Request Body:", req.body);
    const { faculty, subjectCode } = req.body;
    if (!faculty || !subjectCode) {
      console.error("Validation error: Missing faculty or subjectCode.");
      return res.status(400).json({ error: "Faculty and Subject Code are required." });
    }

    try {
      const connection = await getConnection();

      const query = `
        UPDATE faculty
        SET subject_handled = @subjectCode
        WHERE fname = @faculty
      `;
      console.log("Executing Query:", query);

      const result = await connection
        .request()
        .input("faculty", sql.VarChar, faculty)
        .input("subjectCode",sql.VarChar, subjectCode)
        .query(query);

      console.log("Query Result:", result);

      if (result.rowsAffected[0] > 0) {
        console.log("Subject allocated successfully.");
        res.status(200).json({ message: "Subject allocated successfully." });
      } else {
        console.error("Faculty not found.");
        res.status(404).json({ error: "Faculty not found." });
      }
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  }
