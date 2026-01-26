import pool from '../_lib/db.js';

/**
 * Keep-Alive Cron Job for Supabase Free Tier
 * 
 * Supabase pauses inactive databases after 7 days on the Free Tier.
 * This endpoint is called every 3 days via Vercel Cron to keep the database active.
 * 
 * Schedule: "0 0 *\/3 * *" (Every 3 days at midnight UTC)
 */
export default async function handler(req, res) {
    const startTime = Date.now();

    try {
        // Simple query to keep the connection alive
        const result = await pool.query('SELECT 1 AS keep_alive, NOW() AS server_time');
        const duration = Date.now() - startTime;

        console.log('✅ Keep-alive ping successful', {
            duration: `${duration}ms`,
            serverTime: result.rows[0].server_time
        });

        res.status(200).json({
            success: true,
            message: 'Database pinged successfully - Cooperativa Eléctrica SGE online',
            duration: `${duration}ms`,
            serverTime: result.rows[0].server_time,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('❌ Keep-alive ping failed:', error.message);

        res.status(500).json({
            success: false,
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
}
