const livePopups = document.querySelectorAll(".popup-live");

livePopups.forEach((livePopup) => {
  livePopup.innerHTML = `
      <div class="popup__wrapper">
        <h2 class="title--text">Сборник ПАС</h2>
        <div class="container" data-type="videos">
          <iframe src="https://www.youtube.com/embed/ZukcF8Y1e2c?si=CSWxjaQo3NvOQDCF" title="ПАС-1 День-1" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/5bNETkDUCJc" title="ПАС-1 День-2" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/vZCM3_0m9Vs" title="ПАС-1 День-3 Часть 1" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="container" data-type="videos">
            <iframe src="https://www.youtube.com/embed/_ARyuZ6CTRs?si=sf3foocrJNx7x1bY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/llRzjsKBOE8?si=s2k32b2hm4KIulS2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/5v1n-zzBCWk?si=FYvQApDN0u0YuDzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/mHcy8z18AJ0?si=66M3OMhdNOGaxo14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/Nzpo2gz1HVw?si=Dj0bhGgrxvbFVeRH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/ulu3--iWY5c?si=4FfCRd4dypA4BWTj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>
  `;
});
