import Head from "next/head"

function HomePage() {
    return (
        <div className="site-container">
            <Head>
                <title>My project</title>
                <meta
                    name="viewport"
                    content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
                />
            </Head>
            <main className="w-full h-full">NextJS Tailwind CSS Boilerplate</main>
        </div>
    )
}

export default HomePage
