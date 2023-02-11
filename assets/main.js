const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UC-5MT-BUxTzkPTWMediyV0w&part=snippet%2Cid&order=date&maxResults=10";

const options = {
    method: 'GET',
    headers: {
		'X-RapidAPI-Key': 'f15d3f71admsh3f52d10e28ae376p1f46bdjsn4da8d5492454',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
 const content=null || document.getElementById("content");
async function fetchDdata(urlAPI) {
    const respose = await fetch(urlAPI, options)
    const data = await respose.json();
    return data
}
(async () => {
    try {
        const videos = await fetchDdata(API);
        let view = `${videos.items.map(video =>`
        <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
  </div>`).slice(0,8).join("")}
    `
    content.innerHTML=view;
    } catch (error) {
console.log(error)
    }
})();