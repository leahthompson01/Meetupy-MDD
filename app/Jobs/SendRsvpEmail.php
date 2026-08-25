<?php

namespace App\Jobs;

use App\Mail\RsvpConfirmation;
use App\Models\Event;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class SendRsvpEmail implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(public User $user,
        public Event $event) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Mail::to($this->user)->send(
            new RsvpConfirmation($this->user, $this->event)
        );
    }
}
