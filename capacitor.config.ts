import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aMagarinos.loginApp',
  appName: 'login-app',
  webDir: 'www/browser',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000, // Duración en milisegundos
      launchAutoHide: true, // Ocultar automáticamente
      backgroundColor: '#ffffff', // Fondo blanco
      splashFullScreen: true, // Pantalla completa
      androidScaleType: 'CENTER_CROP', // Escala en Android
    }
  }
};

export default config;
