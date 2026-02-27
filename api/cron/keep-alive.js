//Keep-Alive Cron Job for Supabase Free Tier
 //Supabase pauses inactive databases after 7 days on the Free Tier.
 //This endpoint uses the REST API to guarantee activity registration.
 //Schedule: "0 0 */3 * *" (Every 3 days at midnight UTC)

export default async function handler(req, res) {
    const startTime = Date.now();

    try {
        // Obtenemos las variables de entorno necesarias para la API de Supabase
        const supabaseUrl = process.env.SUPABASE_URL; // ej: https://xxxx.supabase.co
        const supabaseKey = process.env.SUPABASE_ANON_KEY; // O la SERVICE_ROLE_KEY

        if (!supabaseUrl || !supabaseKey) {
            throw new Error('Faltan variables de entorno SUPABASE_URL o SUPABASE_ANON_KEY');
        }

        // Hacemos una petición GET a la API REST principal de Supabase
        const response = await fetch(`${supabaseUrl}/rest/v1/cuenta?limit=1`, {
            method: 'GET',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Supabase API respondió con estado: ${response.status}`);
        }

        const duration = Date.now() - startTime;

        console.log('✅ Keep-alive ping successful (via REST API)', {
            duration: `${duration}ms`,
            status: response.status
        });

        res.status(200).json({
            success: true,
            message: 'Database pinged successfully via REST API - Cooperativa Eléctrica SGE online',
            duration: `${duration}ms`,
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
