// TweetList.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const TweetList: React.FC = () => {
    const [tweets, setTweets] = useState<{ id: number; text: string }[]>([]);

    const URL = "http://localhost:3000/tweets";

    useEffect(() => {
        axios
            .get(URL)
            .then((response) => {
                console.log("Fetched tweets:", response.data);
                setTweets(response.data);
            })
            .catch((error) => {
                console.error("Error fetching tweets:", error);
            });
    }, []);

    //  now do it with fetch

    // const fetchTweets = async () => {
    //     try {
    //         const response = await fetch(URL);
    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log("Fetched tweets:", data);
    //             setTweets(data);
    //         } else {
    //             console.error("Error fetching tweets:", response.statusText);
    //         }
    //     } catch (error) {
    //         console.error("Error fetching tweets:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchTweets();
    // }, []);

    return (
        <div>
            <h2>Tweets</h2>
            <ul>
                {tweets.map((tweet) => (
                    <li key={tweet.id}>{tweet.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default TweetList;
