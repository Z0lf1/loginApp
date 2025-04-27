import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../enviroment';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private supabase = createClient(
    environment.supabaseUrl,
    environment.supabaseKey,
    {
      auth: { autoRefreshToken: false, persistSession: false }
    }
  );

  login(email: string, password: string) {
    console.log(password, 'aca');
    this.supabase.auth
      .signInWithPassword({
        email: email,
        password: password,
      })
      .then(({ data, error }) => {
        if (error) {
          console.error('Error:', error.message);
        } else {
          console.log('Log exitoso', data);
        }
      });
  }

  async register(
    email: string,
    password: string
  ): Promise<{ ok: boolean; error?: string }> {
    try {
      const { data, error } = await this.supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        return { ok: false, error: error.message };
      }

      return { ok: true };
    } catch (err) {
      return { ok: false, error: 'Error inesperado al registrar usuario' };
    }
  }
}
