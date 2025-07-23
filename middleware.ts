import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Vérifier si l'utilisateur est déjà sur une route locale
  const { pathname } = request.nextUrl;
  
  // Si déjà sur /en ou /fr, laisser passer
  if (pathname.startsWith('/en') || pathname.startsWith('/fr')) {
    return NextResponse.next();
  }
  
  // Si c'est la racine (/), faire la détection de langue
  if (pathname === '/') {
    // Obtenir la langue préférée du navigateur
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    // Vérifier si le français est préféré
    const prefersFrench = acceptLanguage.toLowerCase().includes('fr');
    
    // Rediriger vers la bonne langue
    const locale = prefersFrench ? 'fr' : 'en';
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (your image folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};