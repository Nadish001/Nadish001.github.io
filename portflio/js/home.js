


@media (max-width: 1100px) {
    .con {
        flex-wrap: wrap;
        justify-content: center;
        padding: 15px 0px;
    }

    .d2 {
        gap: 12px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .d2 a {
        font-size: 13px;
    }

    .intro h1 {
        font-size: 50px;
    }

    .aboutcon {
        gap: 25px;
    }
}

/* MOBILE */

@media (max-width: 768px) {
    .head {
        position: relative;
    }

    .con {
        width: 95%;
        flex-direction: column;
        gap: 15px;
        padding: 15px 0px;
    }

    .d1 {
        font-size: 22px;
    }

    .d2 {
        gap: 12px 18px;
    }

    .d3 {
        padding-bottom: 5px;
    }

    .home {
        padding: 60px 0px;
    }

    .homecon {
        width: 90%;
        flex-direction: column;
        text-align: center;
    }

    .intro,
    .profile {
        width: 100%;
    }

    .intro h1 {
        font-size: 45px;
    }

    .intro h2 {
        font-size: 20px;
    }

    .desc {
        font-size: 14px;
    }

    .buttons,
    .social {
        justify-content: center;
    }

    .profilebox {
        width: 240px;
        height: 220px;
    }

    .section {
        padding: 60px 5%;
    }

    .section h1 {
        font-size: 30px;
    }

    .aboutcon {
        flex-direction: column;
    }

    .aboutbox,
    .abouttext {
        width: 100%;
    }

    .expertcon,
    .skillcon,
    .projectcon,
    .contactcon {
        flex-direction: column;
    }

    .expertbox,
    .skillbox,
    .projectbox,
    .contactbox {
        width: 100%;
        max-width: none;
        flex: auto;
    }

    .certbox {
        width: 100%;
        padding: 25px;
    }

    .footer {
        flex-direction: column;
        text-align: center;
    }
}

@media (max-width: 400px) {
    .d2 {
        gap: 10px;
    }

    .d2 a {
        font-size: 12px;
    }

    .intro h1 {
        font-size: 38px;
    }

    .intro h2 {
        font-size: 18px;
    }

    .section h1 {
        font-size: 26px;
    }

    .projectbox {
        padding: 20px;
    }
}





.profile {
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profilebox {
    width: 300px;
    height: 300px;
    border: 2px solid red;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #191919;
    box-shadow: 0px 0px 30px #300000;
}

.profilebox i {
    font-size: 65px;
    color: red;
}

.profilebox h2 {
    font-size: 20px;
    text-align: center;
}

.profilebox p {
    color: #aaa;
    font-size: 14px;
}