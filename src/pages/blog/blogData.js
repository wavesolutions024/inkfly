import studioImage from "../../assets/hero/Cinematic_Tattoo_Studio_in_Warm_Shadows.png";
import tattooImage from "../../assets/about/about_img.jpg";
import eagleDesign from "../../assets/intro_img.png";

const blogPosts = [
  {
    slug: "how-to-care-for-a-new-tattoo",
    category: "Tattoo Care",
    title: "How to care for a new tattoo",
    excerpt:
      "A little care goes a long way. Learn the simple steps that help your tattoo heal beautifully.",
    image: tattooImage,
    imagePosition: "70% center",
    readingTime: "5 min read",
    sections: [
      {
        heading: "Follow your artist's aftercare advice",
        paragraphs: [
          "A fresh tattoo needs gentle, consistent care while your skin heals. Your artist will explain how to care for your specific tattoo and when to remove any covering. Follow those instructions, since the right timing can vary.",
        ],
      },
      {
        heading: "Keep it clean and moisturized",
        paragraphs: [
          "Wash your hands before touching the tattoo. Clean the area gently with lukewarm water and a mild, fragrance-free soap, then pat it dry with a clean towel. Apply only a thin layer of the aftercare product recommended by your artist.",
        ],
      },
      {
        heading: "Protect the healing skin",
        paragraphs: [
          "Avoid picking or scratching flaking skin, and keep the tattoo away from direct sun, swimming pools and soaking until it has healed. Wear loose, clean clothing over the area when possible.",
          "Healing takes time and can look different for everyone. If you have concerns about how your skin is healing, contact your tattoo artist or a healthcare professional.",
        ],
      },
    ],
  },
  {
    slug: "turning-your-idea-into-a-custom-design",
    category: "Design",
    title: "Turning your idea into a custom design",
    excerpt:
      "From the first sketch to the final details, here's how we work with you to create a one-of-a-kind tattoo.",
    image: studioImage,
    imagePosition: "48% center",
    readingTime: "4 min read",
    sections: [
      {
        heading: "Start with what matters to you",
        paragraphs: [
          "A meaningful custom tattoo begins with a conversation. Share the story, feeling or reference behind your idea—even if it is still taking shape. Those details help your artist understand what you want the finished piece to express.",
        ],
      },
      {
        heading: "Explore style and placement",
        paragraphs: [
          "Think about the styles you are drawn to, the size you have in mind and where the tattoo might sit. Your artist can help you consider how the design will work with the natural shape and movement of that area.",
        ],
      },
      {
        heading: "Refine the artwork together",
        paragraphs: [
          "References are a useful starting point, not a finished blueprint. Your artist brings the ideas together into an original composition, then talks you through the details so the design feels personal and considered.",
        ],
      },
    ],
  },
  {
    slug: "finding-the-right-placement-for-your-tattoo",
    category: "Inspiration",
    title: "Finding the right placement for your tattoo",
    excerpt:
      "Explore the details to consider when choosing a placement that feels right for your design and your story.",
    image: eagleDesign,
    imagePosition: "center",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Consider the shape of the design",
        paragraphs: [
          "A design's proportions can help narrow down placement. Long, flowing artwork may suit an arm or leg, while a compact motif can work well in a smaller area. Your artist can help adapt the composition to the spot you choose.",
        ],
      },
      {
        heading: "Think about visibility and lifestyle",
        paragraphs: [
          "Consider how visible you want your tattoo to be in everyday life and how clothing, work or activities might affect your choice. There is no single right answer—the best placement is one that feels comfortable for you.",
        ],
      },
      {
        heading: "Ask for a placement preview",
        paragraphs: [
          "Before the session, your artist can position a stencil so you can see how the tattoo looks on your body. Take a moment to view it from different angles and ask for adjustments until the placement feels right.",
        ],
      },
    ],
  },
];

export default blogPosts;
