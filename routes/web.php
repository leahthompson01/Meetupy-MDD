<?php

use App\Http\Controllers\EventController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RsvpController;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::get('events/create', [EventController::class, 'create'])->name('events.create');

    Route::post('events', [EventController::class, 'store'])->name('events.store');

    Route::get('events/{event}/edit', [EventController::class, 'edit'])->name('events.edit');

    Route::patch('events/{event}', [EventController::class, 'update'])->name('events.update');

    Route::post('events/{event}/rsvp', [RsvpController::class, 'store'])->name('events.rsvp.store');

    Route::delete('events/{event}/rsvp', [RsvpController::class, 'destroy'])->name('events.rsvp.destroy');
});

Route::get('events', [EventController::class,'index'])->name('events.index');

Route::get('events/{event}', [EventController::class, 'show'])->name('events.show');


require __DIR__.'/settings.php';
