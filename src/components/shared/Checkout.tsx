import React, { useEffect } from 'react'
import { IEvent } from '@/src/lib/database/models/event.model';
import { Button } from '../ui/button';


const Checkout = ({ event, userId }: { event: IEvent, userId: string }) => {

  const onCheckout = async () => {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId
    }

  }

  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" className="button p-2 text-xs">
        {event.isFree ? 'Get Ticket' : 'Buy Ticket'}
      </Button>
    </form>
  )
}

export default Checkout