import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://eoxraesoaqnixkjpfgnw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVveHJhZXNvYXFuaXhranBmZ253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4MjcwNDEsImV4cCI6MjA5MzQwMzA0MX0.Iu1KYWUCCI0v4hdqlGtdyWeiNsYakV57Vi2j2XfLr28'

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes() {
    const {data, error} = await supabase.from('Estudiantes').select('*')
    if (error) {
        console.log('Error:', error)
    } else {
        console.log('Datos:', data)
    }
}

obtenerEstudiantes()