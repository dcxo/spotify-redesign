import Home2FillIcon from 'remixicon-react/Home2FillIcon';
import Home2LineIcon from 'remixicon-react/Home2LineIcon';
import StackLineIcon from 'remixicon-react/StackLineIcon';
import SpotifyFillIcon from 'remixicon-react/SpotifyFillIcon';
import LogoutCircleLineIcon from 'remixicon-react/LogoutCircleLineIcon';
import Menu from 'remixicon-react/Menu2LineIcon';
import HeartLineIcon from 'remixicon-react/HeartLineIcon';
import HeartFillIcon from 'remixicon-react/HeartFillIcon';
import SearchLineIcon from 'remixicon-react/Search2LineIcon';
import PlayCircleFillIcon from 'remixicon-react/PlayCircleFillIcon';
import React, { HTMLProps } from 'react';
import { useAlbumArt, useAlbumInfo } from './hook/albumInfo';

function App() {
    return (
        <div className='flex h-screen sm:flex-col lg:flex-row'>
            <Aside />
            <main className='m-4 ml-0 grid w-full auto-rows-min gap-4 overflow-hidden rounded-xl border-2 border-primary-200/50 bg-primary-50/5 p-4 dark:border-0 dark:bg-zinc-800 dark:shadow-xl dark:shadow-zinc-800/20 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10'>
                <section className='gap-4 rounded-md bg-white/10 p-4 sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-5'>
                    {/* <img
                        src='https://picsum.photos/300'
                        className='row-span-2 aspect-square h-full w-max rounded-md'
                        alt=''
                    /> */}
                    <div className='flex flex-wrap items-baseline gap-[1ch]'>
                        <h1 className='col-span-2 flex flex-col gap-4 text-3xl font-bold'>
                            ¡Bienvenido David!
                        </h1>
                        <h2 className='text-xl font-medium'>
                            ¿Qué quieres hacer hoy?
                        </h2>
                    </div>
                    <div className='grid grid-rows-2 gap-4 p-4 md:grid-cols-2 xl:grid-cols-3'>
                        <QuickAction
                            title='Reproducir canciones favoritas'
                            icon={<HeartFillIcon />}
                        />
                        <QuickAction
                            title='Iniciar radio de la ultima cancion'
                            icon={<HeartFillIcon />}
                        />
                        <QuickAction
                            title='Reproducir ultimo album escuchado'
                            icon={<HeartFillIcon />}
                        />
                        <QuickAction
                            title='Copiar enlace para crear fusiones'
                            icon={<HeartFillIcon />}
                        />
                        <QuickAction
                            className='hidden xl:flex'
                            title='Crear playlist'
                            icon={<HeartFillIcon />}
                        />
                        <QuickAction
                            className='hidden xl:flex'
                            title='Iniciar busqueda'
                            icon={<HeartFillIcon />}
                        />
                    </div>
                </section>
                <section className='group relative col-span-3 flex flex-col gap-2 overflow-hidden rounded-md p-4 text-white sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-5'>
                    {/* <img
                        src='https://picsum.photos/300'
                        className='row-span-2 aspect-square h-full w-max rounded-md'
                        alt=''
                    /> */}
                    <img
                        src='/taylor-midnights-bg.jpg'
                        className='absolute -top-0 -left-0 isolate h-full w-full object-cover object-top brightness-50 filter'
                        alt=''
                    />
                    <h1 className='z-10 col-span-2 flex flex-col gap-4 text-3xl font-bold'>
                        ¡Taylor Swift ha sacado albúm!
                    </h1>
                    <h2 className=' z-10 text-2xl'>
                        Escucha ahora{' '}
                        <span className='font-bold'>Midnights</span>
                    </h2>
                    <div className='spacer'></div>
                    <PlayCircleFillIcon className='z-10 h-12 w-12 self-end text-primary transition-all group-hover:scale-125' />
                </section>
                <h2 className='py-2 text-3xl font-semibold sm:col-span-1 md:col-span-4 lg:col-span-6 xl:col-span-10'>
                    Historial
                </h2>
                <AlbumCard id='8bf2f93c-a270-4e3d-9f4b-1b62cfecb7eb' />
                <AlbumCard id='292f3a7d-5b4a-4367-97fc-fd939b329b93' />
                <AlbumCard id='053dc03a-871e-40cf-80fa-e079b0b8a52b' />
                <AlbumCard id='f0d85b19-1444-4f19-b132-761e287c7baa' />
            </main>
        </div>
    );
}

export default App;

const QuickAction: React.FC<
    HTMLProps<HTMLDivElement> & { icon: React.ReactElement }
> = ({ title, icon, className }) => (
    <button
        className={`flex items-center gap-4 rounded-md bg-primary-400 p-4 font-bold text-black shadow-md shadow-primary-400/20 ${className} transition-all hover:scale-105 hover:bg-primary-300`}
    >
        <div className='w-6'>{icon}</div>
        <span className='text-left'>{title}</span>
    </button>
);

const AlbumCard: React.FC<{ id: string }> = ({ id }) => {
    const { data, status } = useAlbumInfo(id);
    const { data: albumArt, status: albumArtStatus } = useAlbumArt(id);

    if (status === 'loading' || data === undefined) {
        return <></>;
    }

    return (
        <article className='group relative z-0 grid grid-cols-[min-content,1fr] grid-rows-[1fr,min-content,min-content] gap-0 rounded-md border-2 border-primary-200/50 bg-transparent p-4 transition-all hover:scale-105 dark:border-0 dark:bg-white/10 hover:dark:bg-white/20'>
            <img
                src={albumArt?.small}
                alt=''
                className='z-0 col-span-2 mb-2 w-full rounded-md'
            />
            <PlayCircleFillIcon className='row-span-2 mx-2 place-self-center self-center justify-self-center text-primary' />
            <h1 className='text-xl font-bold'>{data.title}</h1>
            <h2>{data.artist}</h2>
            {/* <ul className='pointer-events-none absolute left-full top-1/2 isolate z-[999] max-h-[150%] w-max -translate-y-1/2 translate-x-2 divide-y overflow-auto rounded-md bg-zinc-700 opacity-0 transition-opacity delay-[0ms] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:delay-1000'>
                {data.tracks.map((t: string) => (
                    <li className='p-2' key={t}>
                        {t}
                    </li>
                ))}
            </ul> */}
        </article>
    );
};

const Aside = () => (
    <aside className='flex'>
        <Menu className='m-4 box-content p-2 sm:block lg:hidden' />
        <section className='m-4 hidden flex-col gap-6 p-2 py-4 lg:flex'>
            <NavMenuButton
                title='Home'
                icon={<Home2LineIcon />}
                activeIcon={<Home2FillIcon />}
                isActive
            />
            <NavMenuButton title='Search' icon={<SearchLineIcon />} />
            <NavMenuButton title='Liked' icon={<HeartLineIcon />} />
            <NavMenuButton title='Playlists' icon={<StackLineIcon />} />
            <div className='spacer' />
            <MenuButton
                title='David'
                icon={
                    <img
                        src='https://i.pravatar.cc/300?u=psa-layout'
                        className='w-8 select-none rounded-full'
                        alt=''
                    />
                }
            />
        </section>
    </aside>
);

const NavMenuButton: React.FC<
    HTMLProps<HTMLDivElement> & {
        icon: React.ReactElement;
        activeIcon?: React.ReactElement;
        isActive?: boolean;
    }
> = ({ title, icon, activeIcon, isActive = false }) => (
    <MenuButton
        title={title}
        className={`${isActive && '!text-primary'}`}
        icon={activeIcon === undefined ? icon : isActive ? activeIcon : icon}
    />
);

const MenuButton: React.FC<
    HTMLProps<HTMLDivElement> & { icon: React.ReactElement }
> = ({ className, title, icon, onClick }) => (
    <div
        title={title}
        onClick={onClick}
        className={`flex flex-col items-center gap-1 text-sm ${className}`}
    >
        {icon}
        <span className='not-sr-only select-none'>{title}</span>
    </div>
);
