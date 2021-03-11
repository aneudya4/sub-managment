import React from 'react';
import img from '../../images/banner-img.png';
export default function Banner() {
    return (
        <section className="banner">
            <div className="banner__desc">
                <h2>
                    Unfolding the Power of <span>Subscriptions.</span>
                </h2>
                <p>
                    We focus on Optimizing your experience managing your
                    subscribers.
                </p>

                <div className="banner__form">
                    <form>
                        <input
                            type="email"
                            placeholder="@ Enter your email..."
                        />
                        <button type="submit">Get Notified</button>
                    </form>
                </div>
            </div>
            <div className="banner__img">
                <img src={img} alt="workers" />
            </div>
        </section>
    );
}
