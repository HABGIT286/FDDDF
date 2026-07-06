// ===== Supabase Configuration =====
const SUPABASE_CONFIG = {
    url: 'https://jnedawtieiqtmagjbhld.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpuZWRhd3RpZWlxdG1hZ2piaGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNTI1MDcsImV4cCI6MjA5ODkyODUwN30.6AXVBT1l37mOP6ykJDRuFRSN_mrMr_EmlRoVKSxVQJU'
};

// تحميل Supabase SDK
(function() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    script.onload = () => {
        window.supabaseClient = supabase.createClient(
            SUPABASE_CONFIG.url,
            SUPABASE_CONFIG.anonKey
        );
        console.log('✅ Supabase Connected');
        
        // تشغيل callback عند الاتصال
        if (window.onSupabaseReady) {
            window.onSupabaseReady();
        }
    };
    document.head.appendChild(script);
})();