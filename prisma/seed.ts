import { PrismaClient } from "../app/generated/prisma";
const prisma = new PrismaClient();

async function main() {

    const charactersData = [
      {
        name: "Baldy",
        avatarUrl: "/baldy.png",
        maxHP: 100,
        attackMultiplier: 1.2,
      },
      {
        name: "Scientist",
        avatarUrl: "/scientist.png",
        maxHP: 150,
        attackMultiplier: 0.8,
      },
      {
        name: "Corporate Guy",
        avatarUrl: "/corporate-guy.png",
        maxHP: 80,
        attackMultiplier: 1.1,
      },
    ];

    for (const charData of charactersData) {
        const existing = await prisma.characters.findFirst({
          where: { name: charData.name }
        });
    
        if (!existing) {
          await prisma.characters.create({
            data: charData
          });
          console.log(`Created character: ${charData.name}`);
        } else {
          console.log(`Character ${charData.name} already exists, skipping`);
        }
    }
};

main()
  .then(() => console.log("Seeded!"))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
