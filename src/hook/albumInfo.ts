import { useQuery } from '@tanstack/react-query';

export function useAlbumInfo(id: string) {
    return useQuery(['album', id], async ({ signal }) => {
        const res = await fetch(
            `https://musicbrainz.org/ws/2/release/${id}?inc=artist-credits+recordings`,
            {
                headers: { Accept: 'application/json' },
                signal,
            }
        );

        const j = await res.json();

        return {
            title: j.title,
            artist: j['artist-credit'][0].name,
            tracks: j.media[0].tracks.map((t: any) => t.title),
        };
    });
}

export function useAlbumArt(id: string) {
    return useQuery(['album', 'art', id], async ({ signal }) => {
        const res = await fetch(`https://coverartarchive.org/release/${id}`, {
            headers: { Accept: 'application/json' },
            signal,
        });

        const j = await res.json();

        return {
            large: j.images[0].thumbnails.large,
            small: j.images[0].thumbnails.small,
        };
    });
}
