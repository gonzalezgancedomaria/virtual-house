<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        \App\Http\Middleware\Cors::class,
        \Fruitcake\Cors\HandleCors::class,
        \Illuminate\Http\Middleware\HandleCors::class,
        \App\Http\Middleware\VerifyCsrfToken::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            '/*',
        ],

        'api' => [
            '/api/*',
            'throttle:60,1',
            'bindings',
        ],

        'allowedOrigins' => ['*'],

        'allowedOriginsPatterns' => [],

        'allowedHeaders' => ['*'],

        'allowedMethods' => ['*'],

        'exposedHeaders' => [],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'cors' => \App\Http\Middleware\Cors::class,
    ];
}