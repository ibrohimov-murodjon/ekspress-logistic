import location from "../assets/location.png";

function Location() {
  return (
    <div className="pt-[120px] pb-[78px] bg-[#091242]">
      <div className="myContainer">
        <div className="mb-4 border-b border-gray-200">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className="flex items-center gap-5 p-4 border-b-2 rounded-t-lg text-white font-rubik hover:text-[#1C64F2]"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <img src={location} className="w-[25px]" alt="" />
                Namangan
              </button>
            </li>
            <li className="mr-2 " role="presentation">
              <button
                className="flex items-center gap-5 p-4 border-b-2 rounded-t-lg text-white font-rubik hover:text-[#1C64F2] "
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                <img src={location} className="w-[25px]" alt="" />
                USA
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            className="hidden p-4 rounded-lg"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0375146329075!2d71.77075367521432!3d40.385861157518754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb8369d93de0a7%3A0xa25aa363371a2aec!2sUzum%20Market!5e0!3m2!1sen!2s!4v1696437118519!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="hidden p-4 rounded-lg"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.941837624795!2d71.78528987521445!3d40.38798165738985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a471c6b55b%3A0x9927f2609db0d333!2sNajot%20Ta&#39;lim%20Farg&#39;ona!5e0!3m2!1sen!2s!4v1696436152648!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
