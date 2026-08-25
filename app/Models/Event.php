<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\MeetupGroup;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

#[Fillable(['meetup_group_id', 'title', 'slug', 'description', 'location', 'starts_at'])]
class Event extends Model
{
    
    public function meetupGroup(): BelongsTo
    {
        return $this->belongsTo(MeetupGroup::class);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
}
