import sql from 'mssql';

const config = {
    user: 'sa',
    password: 'collegeproject',
    server: 'localhost', // Use 'localhost' or actual server name
    database: 'Course_Reg',
    port: 1433, // Default SQL Server port
    options: {
        encrypt: false, // For local testing, set to false
        trustServerCertificate: true,
    },
};

let pool: sql.ConnectionPool | undefined;

export async function connectToDatabase() {
    if (!pool) {
        try {
            pool = await sql.connect(config);
            console.log('Connected to database');
        } catch (error) {
            console.error('Database connection failed:', error);
            throw new Error('Database connection failed');
        }
    }
    return pool;
}








