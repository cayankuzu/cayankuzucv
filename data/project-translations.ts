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
      "A mobile UI/UX mockup and interactive prototype that brings event discovery, attendee rooms and interest-based matching into one experience.",
  },
  universe: {
    hook: "The whole university experience in one digital universe.",
    description:
      "A mobile UI/UX mockup and interactive prototype that connects students around campus feeds, communities, events and shared interests.",
  },
  sorita: {
    hook: "The city is not only a map, but a social story written together.",
    description:
      "A mobile UI/UX mockup and interactive prototype that brings places, memories and people together through routes, lists and sharing flows.",
  },
  fikkis: {
    hook: "Trying out a few things.",
    description:
      "A project showcase for interactive web experiences, mobile products, games and creative experiments.",
  },
  wmatch: {
    hook: "What you watch can shape who you match with.",
    description:
      "A mobile product concept that builds a taste profile from films and series, then suggests matches around shared titles and genres.",
  },
  "remember-you-must-die": {
    hook: "Step into a world that asks you to remember death.",
    description:
      "An interactive memento mori experience combining music, light and space, where each room reframes time, memory and mortality through a different atmosphere.",
  },
  desain: {
    hook: "Measure a room and turn it into a three-dimensional design in a few touches.",
    description:
      "A creative 3D tool for planning and visualising interiors in the browser, bringing measurements, layout and scene preview into one workspace.",
  },
  audioroom: {
    hook: "Do not only listen to an album; walk through its world.",
    description:
      "A music experience that turns an album archive into explorable digital rooms, combining sound and visual storytelling in Redd's Mükemmel Boşluk universe.",
  },
  bibish: {
    hook: "Join one of two armies, capture castles, paint the terrain and shape the battlefield.",
    description:
      "A first-person web game that brings red and blue armies together on a large island with weapons, team castles, biomes, territory painting and NPC forces.",
  },
  merbut: {
    hook: "Two heroes, seven biomes and one dark fate leading to Aku.",
    description:
      "A local two-player 3D action game that brings Hz. Ali and Samurai Jack to the same keyboard, with biomes, boss attacks and a shared path to a time portal.",
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
