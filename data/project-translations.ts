import type { Locale } from "@/data/i18n";
import type { Project } from "@/data/projects";

type EnglishProjectCopy = {
  hook: string;
  description: string;
};

const englishProjectCopy: Record<string, EnglishProjectCopy> = {
  etkinlink: {
    hook: "Discover an event and meet people who share your excitement.",
    description:
      "An iOS/Android app combining city event discovery, attendee rooms, interest-based matching and private chat after a mutual like.",
  },
  universe: {
    hook: "The whole university experience in one digital universe.",
    description:
      "An iOS/Android app connecting students and clubs through events, a campus feed, event albums, following and social interactions.",
  },
  sorita: {
    hook: "The city is not only a map, but a social story written together.",
    description:
      "An iOS/Android social app for creating place cards and lists on a map, then discovering people, places and media through follows, likes, comments and sharing.",
  },
  fikkis: {
    hook: "Trying out a few things.",
    description:
      "A project showcase that organises web experiences, mobile products, games and publications in a filterable archive linked to their live destinations.",
  },
  wmatch: {
    hook: "What you watch can shape who you match with.",
    description:
      "An 18+ iOS and Android social app that turns shared films, series, favourites and current viewing into compatibility-based matches, then opens chat after mutual likes.",
  },
  "remember-you-must-die": {
    hook: "Step into a world that asks you to remember death.",
    description:
      "A 3D memento mori experience combining ouroboros, skull, DNA, hourglass and galaxy models with music, lighting controls and a free camera.",
  },
  desain: {
    hook: "Measure a room and turn it into a three-dimensional design in a few touches.",
    description:
      "A creative 3D tool for planning and visualising interiors in the browser, bringing measurements, layout and scene preview into one workspace.",
  },
  audioroom: {
    hook: "Do not only listen to an album; walk through its world.",
    description:
      "A desktop-first browser experience that turns albums and singles into playable 3D music worlds with distinct interaction and listening loops; four worlds are live and two more are upcoming.",
  },
  bibish: {
    hook: "Join one of two armies, capture castles, paint the terrain and shape the battlefield.",
    description:
      "A real-time multiplayer WebGL FPS where two teams fight for ten outposts and paintable terrain in one global room.",
  },
  merbut: {
    hook: "Two heroes, seven biomes and one dark fate leading to Aku.",
    description:
      "A local two-player 2.5D browser action game that brings Hz. Ali and Samurai Jack to the same keyboard through seven biomes, enemy waves and boss battles against Aku.",
  },
  "card-race-game": {
    hook: "Four aces, four lanes and a race that changes with every card draw.",
    description:
      "A game that turns a deck of cards into a probability-based racetrack, where aces advance in their own suits and penalty cards shift the balance.",
  },
  battleship: {
    hook: "Play the classic naval battle again with music, sound and drag-and-drop controls.",
    description:
      "A 10x10 battleship game made with Pygame, including ship placement, a computer opponent, hit animations, score tracking and independent music and SFX controls.",
  },
  "papaz-kacti": {
    hook: "Choose a face-down card from the hand on your right and do not get stuck with the unmatched king.",
    description:
      "A four-player card game against three computer opponents. Pairs are revealed, the selected card is shown and cards taken by opponents remain hidden.",
  },
  "tic-tac-toe": {
    hook: "Choose your board and win a contest that grows from three-in-a-row to five-in-a-row.",
    description:
      "A two-player web version with 3x3, 4x4, 5x5 and 6x6 boards, different alignment goals and score streak tracking.",
  },
  "son-40-saniye": {
    hook: "Your time is certain: you have 40 seconds to sort 33 records and protect your reputation.",
    description:
      "A time-pressured decision game about reviewing random search records, keeping harmless ones and swiping risky ones away.",
  },
  asmaca: {
    hook: "Knowledge decides the outcome; every answer changes the judgment on screen.",
    description:
      "A web game that combines sourced knowledge questions with a cinematic 3D hangman scene, including modes, characters and difficulty options.",
  },
  "monster-wrangler": {
    hook: "Catch the target colour; the wrong monster costs a life.",
    description:
      "A fast-catching game where players find the shown target among moving monsters as the crowd and decision pressure increase over rounds.",
  },
  "catch-the-clown": {
    hook: "The pace rises every time you catch the clown; each miss costs a life.",
    description:
      "A fast target-catching game that brings an original Pygame mechanic to the browser, challenging players to reach a high score before five lives run out.",
  },
  snake: {
    hook: "Every apple makes you grow; the shrinking space determines your next turn.",
    description:
      "A web version of the classic snake game rebuilt with keyboard controls, touch direction buttons and swipe gestures.",
  },
  "burger-dog": {
    hook: "The burgers get faster and the dog gets hungrier; every missed bite costs a life.",
    description:
      "A reflex game about catching falling burgers before they hit the ground. Each successful catch raises both score and falling speed.",
  },
  "feed-the-dragon": {
    hook: "Every coin feeds the dragon, speeds up the game and makes the next move harder.",
    description:
      "An arcade game where the player moves a dragon up and down to catch incoming coins as speed, rhythm and positioning become more demanding.",
  },
  "atkafasi-fanzin": {
    hook: "An independent zine space where ideas collide.",
    description:
      "An independent publishing experiment combining writing, visuals and collaborative production, available through Shopier and Gumroad.",
  },
};

export function getProjectText(project: Project, locale: Locale) {
  if (locale === "tr") {
    return { hook: project.hook, description: project.description };
  }

  return englishProjectCopy[project.id];
}

export function getProjectImageAlt(project: Project, locale: Locale) {
  return locale === "tr" ? `${project.title} proje görseli` : `${project.title} project preview`;
}

export function getProjectScreenAlt(project: Project, index: number, locale: Locale) {
  return locale === "tr"
    ? `${project.title} ekranı ${index + 1}`
    : `${project.title} screen ${index + 1}`;
}
