 

import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const ThumbnailPlayer = () => {
    const videoSource: Plyr.SourceInfo = {
        type: "video", // به طور صریح نوع را مشخص می‌کنیم
        sources: [
            {
                src: "https://buckettest.storage.c2.liara.space/video/next1.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6b96162b-d379-44a7-ae3f-e3cd178bbf19%2F20241128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241128T074516Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=415f408d7b0ac30d8c96ead29a7ca3dc698461487a7a48406c4d94a850fe2314",
                type: "video/mp4", // نوع فایل
            },
        ],
    };
 
        return <Plyr source={videoSource} />;
};

export default ThumbnailPlayer;
