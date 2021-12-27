import React from 'react';
import { Card, CardBody } from 'shards-react';
import ShortenText from '../../utils/ShortenText';
import ToText from '../../utils/ToText';
import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// functional card component to display single item
export default function MediumCard(props) {
  var shortMonthName = new Intl.DateTimeFormat('en-US', {
    month: 'short'
  }).format;
  let date = new Date(props.pubDate);
  const publishDate = shortMonthName(date) + ' ' + date.getDate() + ',' + ' ' + date.getFullYear();
  return (
    <Card small className="card-post card-post--1">
      <div>
        <div className="card-post__author d-flex">

        </div>
      </div>
      <CardBody>
        <h5 className="card-title">
          <a href={props.link} target="_blank" className="text-fiord-blue" rel="noopener noreferrer">
            {ShortenText(props.title, 0, 100)}
          </a>
        </h5>
        <p className="card-text d-inline-block mb-3">{ShortenText(ToText(props.content), 0, 120) + '...'}</p>
        <br />
        <img src={props.thumbnail} className="small-image-wowo"/>
        <span className="text-dark">
          <FontAwesomeIcon icon={faUser} /> {props.author}
        </span>
        <br />

        <span className="text-muted">
          <FontAwesomeIcon icon={faCalendarAlt} /> {publishDate}
        </span>
      </CardBody>
    </Card>
  );
}