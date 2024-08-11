
import AboutPreview from "./templates/about.js";

CMS.registerPreviewStyle("/css/styles.css");
CMS.registerPreviewStyle("/css/tweaks.css");

CMS.registerPreviewTemplate("about", AboutPreview);
CMS.init();
