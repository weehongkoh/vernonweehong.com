import {
    faGithub,
    faLinkedin,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { resume } from "@/data/resume";
import { clsx, isEmptyOrWhitespace } from "@/helpers";
import { SocialMediaProp, socialMediaIconType } from "@/types/Resume";

const socialMediaIcons: socialMediaIconType = {
    github: faGithub,
    linkedin: faLinkedin,
    youtube: faYoutube,
};

export default function SocialMedia({
    classes,
}: Readonly<{ classes?: string }>) {
    const {
        data: { social_media },
    } = resume;
    return (
        <div
            className={clsx(
                !isEmptyOrWhitespace(classes) ? (classes ?? "") : "",
                "flex gap-x-5",
            )}
        >
            {social_media.map((social: SocialMediaProp) => (
                <a key={social.name} href={social.url} target="_blank">
                    <FontAwesomeIcon
                        className="h-6 w-6 text-white"
                        icon={socialMediaIcons[social.name]}
                    />
                </a>
            ))}
        </div>
    );
}