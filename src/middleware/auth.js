// src/middleware/auth.js
// This is a placeholder for Astro middleware.
// Astro's middleware is still experimental and syntax might change.
// For now, we will implement auth checks primarily in BaseLayout.astro.

/*
// Example of potential Astro middleware (conceptual)
import { defineMiddleware } from 'astro/middleware';
import { auth } from '../lib/firebase'; // Adjust path as necessary
import { onAuthStateChanged } from 'firebase/auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const publicPaths = ['/login', '/_image']; // Paths accessible without auth

  // Allow access to public paths and Astro's internal assets
  if (publicPaths.some(path => url.pathname.startsWith(path)) || url.pathname.startsWith('/_astro')) {
    return next();
  }

  // This is tricky because onAuthStateChanged is client-side.
  // Middleware runs server-side. We'd need a way to check session state
  // (e.g., via a cookie set after client-side login).

  // For a server-side check, you might look for a session cookie
  // For example, if Firebase sets a specific cookie after auth.
  // This is a simplified example and needs a robust solution.

  const sessionCookie = context.cookies.get('firebaseSession'); // Fictional cookie name

  if (!sessionCookie && !url.pathname.startsWith('/admin')) {
    // If trying to access non-admin pages without session, allow (e.g. marketing site)
    // return next();
  }


  if (!sessionCookie && url.pathname.startsWith('/admin')) {
    // No session and trying to access admin pages, redirect to login
    return new Response(null, {
      status: 302, // Found, redirect
      headers: {
        'Location': '/login' // Or your login page
      }
    });
  }

  // If session exists or path is public, proceed
  return next();
});

*/

// As of Astro 3.x/4.x, official middleware is the preferred way.
// However, for Firebase Web SDK (client-side auth),
// redirect logic is often handled in a layout or on client-side.

// This file is kept as a placeholder if we decide to implement
// more advanced server-side session checking with Astro middleware later.
// For now, the primary auth guard will be in BaseLayout.astro.

console.log("Auth middleware placeholder loaded. Actual auth logic will be in BaseLayout.astro for client-side Firebase Auth.");

// Default export for Astro middleware (if it were active)
export function onRequest({ locals, request }, next) {
  // console.log('Middleware processing request:', request.url);
  // locals.user = { name: 'Placeholder User' }; // Example: setting something in locals
  return next();
}
