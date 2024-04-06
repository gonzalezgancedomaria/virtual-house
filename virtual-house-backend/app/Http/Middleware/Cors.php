<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        header('Access-Control-Allow-Origin:  http://localhost:4200');
        header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, X-API-KEY, X-Requested-With, Authorization, Origin, Accept, Access-Control-Request-Method');
        header('Access-Control-Allow-Methods:  GET, POST, OPTIONS, PUT, DELETE');
        header("Allow: GET, POST, OPTIONS, PUT, DELETE");
        return $next($request);
    }
}
