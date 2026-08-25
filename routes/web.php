<?php

use App\Http\Controllers\EventController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::get('events/create', [EventController::class, 'create'])->name('events.create');

    Route::post('events', [EventController::class, 'store'])->name('events.store');

    // what will be our routes to edit events?
});

Route::get('events', [EventController::class,'index'])->name('events.index');

Route::get('events/{event}', [EventController::class, 'show'])->name('events.show');


require __DIR__.'/settings.php';
