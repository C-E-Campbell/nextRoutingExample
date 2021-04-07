import React from 'react';
import Link from 'next/link';
export default function Event({ title, image, date, location, id }) {
  const readableDate = new Date(date).toLocaleDateString('en-US');
  const formattedLocation = location.replace(',', '\n');
  const exploreLink = `/events/${id}`;
  return (
    <li>
      <img src={`/${image}`} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
