const items = [
  {
    image: "https://play-lh.googleusercontent.com/J23c0oKu-FOWrbY7kpGpFtdD704a8b2fZPswvluBLZhB-xs615XV3S6EqXcUnFFUqh8",
    title: "Tabla",
    unique_plays: 50,
    total_plays: 100,
    completion_rate: 75
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE1qrILFdhlWm8TEkVleqm2QuETVugU8qqwQ&usqp=CAU",
    title: "Guitar",
    unique_plays: 30,
    total_plays: 50,
    completion_rate: 60
  },
   {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFd638GpnFpo-4rzTBs2kXUqV2Hpkm3Exx-w&usqp=CAU",
    title: "Sitar",
    unique_plays: 30,
    total_plays: 60,
    completion_rate: 40
  },
  // Add more items as needed
];

function createProgressBar(completionRate) {
  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  
  const progressBarFill = document.createElement("div");
  progressBarFill.className = "progress-bar-fill";
  progressBarFill.style.width = `${completionRate}%`;
  
  progressBar.appendChild(progressBarFill);
  return progressBar;
}

function createItemElement(item) {
  const itemElement = document.createElement("div");
  itemElement.className = "item";

  const imageElement = document.createElement("img");
  imageElement.src = item.image;
  itemElement.appendChild(imageElement);

  const titleElement = document.createElement("h2");
  titleElement.textContent = item.title;
  itemElement.appendChild(titleElement);

  const uniquePlaysElement = document.createElement("p");
  uniquePlaysElement.textContent = `Unique Plays: ${item.unique_plays}`;
  itemElement.appendChild(uniquePlaysElement);

  const totalPlaysElement = document.createElement("p");
  totalPlaysElement.textContent = `Total Plays: ${item.total_plays}`;
  itemElement.appendChild(totalPlaysElement);

  const completionRateElement = document.createElement("div");
  completionRateElement.textContent = `Completion Rate: ${item.completion_rate}%`;
  completionRateElement.appendChild(createProgressBar(item.completion_rate));
  itemElement.appendChild(completionRateElement);

  return itemElement;
}

const itemsContainer = document.getElementById("items-container");
items.forEach((item) => {
  const itemElement = createItemElement(item);
  itemsContainer.appendChild(itemElement);
});
