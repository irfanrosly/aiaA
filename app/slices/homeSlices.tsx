import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface HomeState {
  data: Array<string | number>;
  favItem: Array<string | number>;
}

const initialState: HomeState = {
  data: ['Test data'],
  favItem: [
    {
      Name: 'Metallica',
      Type: 'music',
      wTeaser:
        'Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich and has been based in San Francisco for most of its career. The band\'s fast tempos, instrumentals and aggressive musicianship made them one of the founding "big four" bands of thrash metal, alongside Megadeth, Anthrax, and Slayer. Metallica\'s current lineup comprises founding members and primary songwriters Hetfield and Ulrich, longtime lead guitarist Kirk Hammett, and bassist Robert Trujillo. Guitarist Dave Mustaine (who formed Megadeth after being fired from the band) and bassists Ron McGovney, Cliff Burton, and Jason Newsted are former members of the band.',
      wUrl: 'http://en.wikipedia.org/wiki/Metallica',
      yUrl: 'https://www.youtube-nocookie.com/embed/tAGnKpE4NCI',
      yID: 'tAGnKpE4NCI',
    },
    {
      Name: 'The Doors',
      Type: 'music',
      wTeaser:
        "The Doors were an American rock band formed in Los Angeles in 1965, with vocalist Jim Morrison, keyboardist Ray Manzarek, guitarist Robby Krieger and drummer John Densmore. They were among the most controversial and influential rock acts of the 1960s, partly due to Morrison's lyrics and voice, along with his erratic stage persona. The group is widely regarded as an important figure of the era's counterculture.The band took its name from the title of Aldous Huxley's book The Doors of Perception, itself a reference to a quote by William Blake. After signing with Elektra Records in 1966, the Doors with Morrison released six albums in five years, some of which are considered among the greatest of all time, including their self-titled debut (1967), Strange Days (1967), and L.A. Woman (1971). They were one of the most successful bands during that time and by 1972 the Doors had sold over 4 million albums domestically and nearly 8\u00a0million singles.",
      wUrl: 'https://en.wikipedia.org/wiki/The_Doors',
      yUrl: 'https://www.youtube-nocookie.com/embed/cJ7SUppRRoA',
      yID: 'cJ7SUppRRoA',
    },
    {
      Name: 'Arctic Monkeys',
      Type: 'music',
      wTeaser:
        "Arctic Monkeys are an English rock band formed in Sheffield in 2002. The group consists of Alex Turner (lead vocals, guitar, keyboards), Jamie Cook (guitar, keyboards), Nick O'Malley (bass guitar, backing vocals), and Matt Helders (drums, backing vocals). Former band member Andy Nicholson (bass guitar, backing vocals) left the band in 2006 shortly after their debut album was released.Arctic Monkeys were heralded as one of the first bands to come to public attention via the Internet, with commentators suggesting they represented the possibility of a change in the way in which new bands are promoted and marketed. Their debut album, Whatever People Say I Am, That's What I'm Not (2006), became the fastest-selling debut album in UK chart history, and has been hailed as one of the greatest debut albums. It won Best British Album at the 2007 Brit Awards. The band's second album, Favourite Worst Nightmare (2007), was also acclaimed by critics and won Best British Album at the 2008 BRIT Awards. They went on to release Humbug (2009) and Suck It and See (2011).",
      wUrl: 'http://en.wikipedia.org/wiki/Arctic_Monkeys_(band)',
      yUrl: 'https://www.youtube-nocookie.com/embed/bpOSxM0rNPM',
      yID: 'bpOSxM0rNPM',
    },
    {
      Name: 'Gorillaz',
      Type: 'music',
      wTeaser:
        'Gorillaz are an English band formed in 1998 by musician Damon Albarn and artist Jamie Hewlett, from London, England. The band primarily consists of four members: 2-D (vocals, keyboards), Murdoc Niccals (bass guitar), Noodle (guitar, keyboards, vocals), and Russel Hobbs (drums). Their universe is presented in music videos, interviews, comic strips and short cartoons. Gorillaz\' music often features collaborations with a wide range of featured artists, with 2-D as the only permanent musical contributor.With Gorillaz, Albarn departed from the distinct Britpop of his band Blur, exploring a variety of musical styles including hip hop, electronic music and world music through an "eccentrically postmodern" approach. The band\'s 2001 debut album Gorillaz, which featured dub, Latin and punk influences, went triple platinum in the UK and double platinum in Europe, with sales driven by the success of the album\'s lead single "Clint Eastwood". Their second studio album, Demon Days (2005), went six times platinum in the UK and double platinum in the US and spawned the successful lead single "Feel Good Inc.".',
      wUrl: 'http://en.wikipedia.org/wiki/Gorillaz',
      yUrl: 'https://www.youtube-nocookie.com/embed/HyHNuVaZJ-k',
      yID: 'HyHNuVaZJ-k',
    },
    {
      Name: 'Muse',
      Type: 'music',
      wTeaser:
        'Muse are an English rock band from Teignmouth, Devon, formed in 1994. The band consists of Matt Bellamy (lead vocals, guitar, keyboards), Chris Wolstenholme (bass guitar, backing vocals), and Dominic Howard (drums).Muse released their debut album, Showbiz, in 1999, showcasing Bellamy\'s falsetto and a melancholic alternative rock style. Their second album, Origin of Symmetry (2001), incorporated wider instrumentation and romantic classical influences and earned them a reputation for energetic live performances. Absolution (2003) saw further classical influence, with strings on tracks such as "Butterflies and Hurricanes", and was the first of six consecutive UK number-one albums.',
      wUrl: 'http://en.wikipedia.org/wiki/Muse_(band)?redirect=no',
      yUrl: 'https://www.youtube-nocookie.com/embed/d55ELY17CFM',
      yID: 'd55ELY17CFM',
    },
    {
      Name: 'The Beatles',
      Type: 'music',
      wTeaser:
        "The Beatles were an English rock band, formed in Liverpool in 1960, that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and popular music's recognition as an art form. Rooted in skiffle, beat and 1950s rock 'n' roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band later explored music styles ranging from ballads and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era's youth and sociocultural movements.",
      wUrl: 'http://en.wikipedia.org/wiki/The_Beatles',
      yUrl: 'https://www.youtube-nocookie.com/embed/NCtzkaL2t_Y',
      yID: 'NCtzkaL2t_Y',
    },
    {
      Name: 'Green Day',
      Type: 'music',
      wTeaser:
        "Green Day is an American rock band formed in the East Bay of California in 1987 by lead vocalist and guitarist Billie Joe Armstrong, together with bassist and backing vocalist Mike Dirnt. For most of the band's career, they have been a power trio with drummer Tr\u00e9 Cool, who replaced John Kiffmeyer in 1990 before the recording of the band's second studio album, Kerplunk (1991). Touring guitarist Jason White became a full-time member in 2012, but returned to his touring role in 2016. Before taking its current name in 1989, Green Day was called Sweet Children, and they were part of the late 1980s/early 1990s Bay Area punk scene that emerged from the 924 Gilman Street club in Berkeley, California. The band's early releases were with the independent record label Lookout! Records. In 1994, their major-label debut Dookie, released through Reprise Records, became a breakout success and eventually shipped over 10 million copies in the U.S. Alongside fellow California punk bands Bad Religion, the Offspring, Rancid, and Social Distortion, Green Day is credited with popularizing mainstream interest in punk rock in the U.S.",
      wUrl: 'http://en.wikipedia.org/wiki/Green_Day',
      yUrl: 'https://www.youtube-nocookie.com/embed/Soa3gO7tL-c',
      yID: 'Soa3gO7tL-c',
    },
    {
      Name: 'Pink Floyd',
      Type: 'music',
      wTeaser:
        "Pink Floyd are an English rock band formed in London in 1965. Gaining an early following as one of the first British psychedelic groups, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows. They became a leading band of the progressive rock genre, cited by some as the greatest progressive rock band of all time.Pink Floyd were founded in 1965 by Syd Barrett (guitar, lead vocals), Nick Mason (drums), Roger Waters (bass guitar, vocals), and Richard Wright (keyboards, vocals). Under Barrett's leadership, they released two charting singles and the successful debut album The Piper at the Gates of Dawn (1967). Guitarist and vocalist David Gilmour joined in December 1967; Barrett left in April 1968 due to deteriorating mental health. Waters became the primary lyricist and thematic leader, devising the concepts behind the band's peak success with the albums The Dark Side of the Moon (1973), Wish You Were Here (1975), Animals (1977) and The Wall (1979). The musical film based on The Wall, Pink Floyd \u2013 The Wall (1982), won two BAFTA Awards. Pink Floyd also composed several film scores. ",
      wUrl: 'https://en.wikipedia.org/wiki/Pink_Floyd',
      yUrl: 'https://www.youtube-nocookie.com/embed/acyv33TDxtE',
      yID: 'acyv33TDxtE',
    },
  ],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Array<string | number>>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = homeSlice.actions;

export default homeSlice.reducer;
