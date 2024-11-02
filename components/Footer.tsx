export default function Footer() {
  return (
    <footer className="px-4 text-[#475569]">
      <div className="flex flex-col py-12 gap-8 border-b border-[#E2E8F0]">
        <div className="flex flex-col item">
          <div className="flex gap-2 py-3 font-medium text-[16px]/[17.6px] items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.252 10C4.08416 10.6534 3.99949 11.3254 4 12C4 12.69 4.088 13.36 4.252 14H7.1C6.96518 12.6701 6.96518 11.3299 7.1 10H4.252ZM5.07 8H7.416C7.682 6.783 8.066 5.693 8.537 4.786C7.08518 5.48542 5.87722 6.60523 5.07 8ZM19.748 10H16.9C17.0348 11.3299 17.0348 12.6701 16.9 14H19.748C20.0847 12.6879 20.0847 11.3121 19.748 10ZM18.93 8C18.1228 6.60523 16.9148 5.48542 15.463 4.786C15.935 5.693 16.318 6.783 16.584 8H18.93ZM9.112 10C9.03708 10.664 8.99968 11.3318 9 12C9 12.685 9.038 13.355 9.112 14H14.888C15.0386 12.6709 15.0386 11.3291 14.888 10H9.112ZM9.47 8H14.53C14.348 7.2483 14.0855 6.51841 13.747 5.823C13.119 4.568 12.447 4 12 4C11.552 4 10.881 4.568 10.253 5.823C9.938 6.455 9.673 7.19 9.47 8ZM5.07 16C5.87722 17.3948 7.08518 18.5146 8.537 19.214C8.065 18.307 7.682 17.217 7.416 16H5.07ZM18.93 16H16.584C16.318 17.217 15.934 18.307 15.463 19.214C16.9148 18.5146 18.1228 17.3948 18.93 16ZM9.47 16C9.673 16.81 9.938 17.545 10.253 18.177C10.881 19.432 11.553 20 12 20C12.448 20 13.119 19.432 13.747 18.177C14.062 17.545 14.327 16.81 14.53 16H9.47ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z"
                fill="#475569"
              />
            </svg>
            <p>Categories</p>
          </div>
          <div className="flex flex-col font-normal text-[16px]/[22.4px]">
            <div className="flex gap-2 py-3">User Interface</div>
            <div className="flex gap-2 py-3">User Experience</div>
            <div className="flex gap-2 py-3">Digital Media</div>
            <div className="flex gap-2 py-3">Lifestyle</div>
            <div className="flex gap-2 py-3">Programming</div>
            <div className="flex gap-2 py-3">Animation</div>
          </div>
        </div>
        <div className="flex flex-col item">
          <div className="flex gap-2 py-3 font-medium text-[16px]/[17.6px] items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00013 18.9999C6.27691 18.9995 5.56238 18.8422 4.90584 18.5389C4.2493 18.2355 3.66638 17.7934 3.1973 17.2429C2.72821 16.6925 2.38413 16.0468 2.18878 15.3504C1.99343 14.6541 1.95147 13.9237 2.06579 13.2095C2.18012 12.4954 2.448 11.8146 2.85096 11.214C3.25393 10.6135 3.78238 10.1075 4.39986 9.73095C5.01735 9.35443 5.70916 9.11634 6.42758 9.03312C7.146 8.9499 7.87392 9.02352 8.56113 9.24891C9.1957 7.76654 10.3225 6.54862 11.7511 5.80085C13.1797 5.05309 14.8226 4.82133 16.4023 5.1447C17.9821 5.46807 19.4018 6.32677 20.4217 7.57574C21.4415 8.82472 21.9991 10.3874 22.0001 11.9999C22.0001 13.8564 21.2626 15.6369 19.9499 16.9497C18.6371 18.2624 16.8566 18.9999 15.0001 18.9999H7.00013ZM7.00013 16.9999H15.0001C15.9031 16.9995 16.7891 16.7546 17.5641 16.2911C18.339 15.8277 18.974 15.163 19.4016 14.3677C19.8292 13.5724 20.0335 12.6761 19.9927 11.7741C19.9519 10.872 19.6676 9.99788 19.17 9.24441C18.6724 8.49093 17.98 7.88628 17.1664 7.49465C16.3528 7.10302 15.4483 6.93904 14.549 7.0201C13.6496 7.10116 12.789 7.42425 12.0586 7.95506C11.3281 8.48588 10.755 9.20459 10.4001 10.0349L9.68013 11.7209L7.93813 11.1489C7.52591 11.0139 7.08931 10.9699 6.65843 11.0199C6.22756 11.07 5.81266 11.2128 5.44233 11.4387C5.07201 11.6646 4.75507 11.968 4.51336 12.3282C4.27165 12.6884 4.11093 13.0967 4.04226 13.525C3.9736 13.9533 3.99863 14.3914 4.11564 14.8091C4.23264 15.2268 4.43883 15.6142 4.71999 15.9445C5.00115 16.2748 5.3506 16.5402 5.74425 16.7224C6.13789 16.9046 6.56636 16.9993 7.00013 16.9999Z"
                fill="#0F172A"
              />
            </svg>

            <p>Product</p>
          </div>
          <div className="flex flex-col font-normal text-[16px]/[22.4px]">
            <div className="flex gap-2 py-3">Pricing</div>
            <div className="flex gap-2 py-3">Overview</div>
            <div className="flex gap-2 py-3">Browse</div>
            <div className="flex gap-2 py-3">Accessibility</div>
            <div className="flex gap-2 py-3">Five</div>
            <div className="flex gap-2 py-3">Changelog</div>
          </div>
        </div>
        <div className="flex flex-col item">
          <div className="flex gap-2 py-3 font-medium text-[16px]/[17.6px] items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 10.163C21.674 10.3463 21.4027 10.613 21.2139 10.9359C21.0252 11.2587 20.9258 11.626 20.926 12C20.926 12.789 21.359 13.476 22 13.837L21.283 16.243C20.8954 16.1763 20.497 16.2196 20.1327 16.3678C19.7685 16.516 19.453 16.7633 19.2222 17.0816C18.9913 17.3999 18.8542 17.7766 18.8264 18.1688C18.7986 18.5611 18.8813 18.9533 19.065 19.301L17.003 20.903C16.73 20.6792 16.4051 20.5277 16.0582 20.4624C15.7113 20.3971 15.3535 20.4202 15.0179 20.5295C14.6822 20.6387 14.3794 20.8307 14.1374 21.0877C13.8954 21.3447 13.7219 21.6584 13.633 22L10.343 21.992C10.2531 21.652 10.0794 21.34 9.83778 21.0845C9.59618 20.829 9.29439 20.6381 8.95999 20.5292C8.62559 20.4204 8.26924 20.3972 7.92353 20.4616C7.57782 20.526 7.25377 20.676 6.981 20.898L4.921 19.283C5.09957 18.9367 5.17855 18.5477 5.14914 18.1592C5.11973 17.7708 4.98309 17.3981 4.75442 17.0826C4.52576 16.7672 4.21404 16.5214 3.85398 16.3727C3.49391 16.2239 3.09962 16.178 2.715 16.24L2 13.825C2.31995 13.6398 2.58551 13.3737 2.77 13.0533C2.95449 12.733 3.0514 12.3697 3.051 12C3.051 11.22 2.63 10.54 2 10.175L2.715 7.76C3.0997 7.82225 3.49412 7.77648 3.85435 7.6278C4.21457 7.47912 4.52645 7.23336 4.75525 6.9179C4.98405 6.60243 5.12078 6.22964 5.15022 5.84106C5.17966 5.45247 5.10066 5.06334 4.922 4.717L6.98 3.102C7.25277 3.32395 7.57682 3.47399 7.92253 3.53841C8.26824 3.60283 8.62459 3.57957 8.95899 3.47075C9.29339 3.36194 9.59518 3.17104 9.83678 2.91551C10.0784 2.65998 10.2521 2.34797 10.342 2.008L13.634 2C13.7229 2.34161 13.8964 2.65535 14.1384 2.91233C14.3804 3.16931 14.6832 3.36127 15.0189 3.47053C15.3545 3.5798 15.7123 3.60285 16.0592 3.53758C16.4061 3.4723 16.731 3.32079 17.004 3.097L19.064 4.7C18.8803 5.04769 18.7976 5.43989 18.8254 5.83215C18.8532 6.22442 18.9903 6.60106 19.2212 6.91938C19.452 7.23771 19.7675 7.485 20.1317 7.63322C20.496 7.78144 20.8944 7.82467 21.282 7.758L22 10.162V10.163ZM16.823 5.68C16.823 5.617 16.825 5.555 16.828 5.492L16.748 5.43C15.9691 5.64219 15.1449 5.61989 14.3786 5.36588C13.6123 5.11187 12.9379 4.63744 12.44 4.002L11.536 4.004C11.0399 4.63674 10.3687 5.10966 9.60597 5.36392C8.8432 5.61817 8.02251 5.64255 7.246 5.434L7.151 5.51C7.18866 6.41268 6.92769 7.30259 6.4085 8.04197C5.8893 8.78135 5.14085 9.32895 4.279 9.6C4.78181 10.2988 5.05191 11.1381 5.051 11.999C5.051 12.881 4.771 13.714 4.279 14.399C5.14085 14.67 5.8893 15.2176 6.4085 15.957C6.92769 16.6964 7.18866 17.5863 7.151 18.489L7.247 18.564C8.02339 18.3562 8.84371 18.3809 9.60617 18.6351C10.3686 18.8894 11.0397 19.3619 11.536 19.994L12.44 19.996C12.9376 19.3604 13.6118 18.8859 14.3779 18.6319C15.1441 18.3778 15.9682 18.3556 16.747 18.568L16.827 18.506C16.7858 17.6005 17.0452 16.7068 17.5649 15.9642C18.0845 15.2215 18.8352 14.6716 19.7 14.4C19.1968 13.701 18.9263 12.8613 18.927 12C18.927 11.118 19.208 10.284 19.7 9.6C18.866 9.33781 18.1374 8.81638 17.6201 8.11155C17.1029 7.40672 16.824 6.55526 16.824 5.681L16.823 5.68ZM12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16ZM12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z"
                fill="#0F172A"
              />
            </svg>

            <p>Solutions</p>
          </div>
          <div className="flex flex-col font-normal text-[16px]/[22.4px]">
            <div className="flex gap-2 py-3">Brainstorming</div>
            <div className="flex gap-2 py-3">Ideation</div>
            <div className="flex gap-2 py-3">Wireframing</div>
            <div className="flex gap-2 py-3">Research</div>
            <div className="flex gap-2 py-3">Design</div>
            <div className="flex gap-2 py-3">Concept</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2 py-3 font-medium text-[16px]/[17.6px] items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00003 20C7.26525 20 7.5196 19.8947 7.70714 19.7071C7.89467 19.5196 8.00003 19.2652 8.00003 19C8.00003 18.7348 7.89467 18.4805 7.70714 18.2929C7.5196 18.1054 7.26525 18 7.00003 18C6.73481 18 6.48046 18.1054 6.29292 18.2929C6.10539 18.4805 6.00003 18.7348 6.00003 19C6.00003 19.2652 6.10539 19.5196 6.29292 19.7071C6.48046 19.8947 6.73481 20 7.00003 20ZM8.00003 12.998V16.171C8.66752 16.4069 9.23012 16.8712 9.58839 17.4818C9.94666 18.0924 10.0775 18.81 9.95784 19.5078C9.83817 20.2056 9.47566 20.8386 8.9344 21.2949C8.39314 21.7512 7.70798 22.0015 7.00003 22.0015C6.29208 22.0015 5.60692 21.7512 5.06566 21.2949C4.5244 20.8386 4.16189 20.2056 4.04222 19.5078C3.92254 18.81 4.0534 18.0924 4.41167 17.4818C4.76994 16.8712 5.33254 16.4069 6.00003 16.171V7.82902C5.33254 7.59312 4.76994 7.12883 4.41167 6.51822C4.0534 5.90761 3.92254 5.19 4.04222 4.49223C4.16189 3.79447 4.5244 3.16148 5.06566 2.70515C5.60692 2.24882 6.29208 1.99854 7.00003 1.99854C7.70798 1.99854 8.39314 2.24882 8.9344 2.70515C9.47566 3.16148 9.83817 3.79447 9.95784 4.49223C10.0775 5.19 9.94666 5.90761 9.58839 6.51822C9.23012 7.12883 8.66752 7.59312 8.00003 7.82902V10.169C8.31203 10.059 8.64703 9.99902 8.99703 9.99802L15.034 9.99202C15.2991 9.99176 15.5532 9.88628 15.7405 9.69878C15.9278 9.51127 16.033 9.25707 16.033 8.99202V7.84002C15.3614 7.60992 14.7931 7.14915 14.4291 6.5396C14.0651 5.93006 13.929 5.2112 14.045 4.51078C14.161 3.81036 14.5215 3.17374 15.0625 2.71405C15.6036 2.25435 16.2901 2.00136 17 2.00002C17.7049 1.99973 18.3874 2.24766 18.9278 2.70031C19.4681 3.15297 19.8318 3.78144 19.9551 4.47548C20.0783 5.16952 19.9532 5.88479 19.6018 6.49582C19.2503 7.10684 18.6949 7.5746 18.033 7.81702V8.99202C18.033 9.78715 17.7174 10.5498 17.1554 11.1123C16.5935 11.6748 15.8312 11.9912 15.036 11.992L8.99903 11.998C8.73399 11.9983 8.47989 12.1038 8.29257 12.2913C8.10525 12.4788 8.00003 12.733 8.00003 12.998ZM7.00003 6.00002C7.26525 6.00002 7.5196 5.89467 7.70714 5.70713C7.89467 5.51959 8.00003 5.26524 8.00003 5.00002C8.00003 4.73481 7.89467 4.48045 7.70714 4.29292C7.5196 4.10538 7.26525 4.00002 7.00003 4.00002C6.73481 4.00002 6.48046 4.10538 6.29292 4.29292C6.10539 4.48045 6.00003 4.73481 6.00003 5.00002C6.00003 5.26524 6.10539 5.51959 6.29292 5.70713C6.48046 5.89467 6.73481 6.00002 7.00003 6.00002ZM17 6.00002C17.2652 6.00002 17.5196 5.89467 17.7071 5.70713C17.8947 5.51959 18 5.26524 18 5.00002C18 4.73481 17.8947 4.48045 17.7071 4.29292C17.5196 4.10538 17.2652 4.00002 17 4.00002C16.7348 4.00002 16.4805 4.10538 16.2929 4.29292C16.1054 4.48045 16 4.73481 16 5.00002C16 5.26524 16.1054 5.51959 16.2929 5.70713C16.4805 5.89467 16.7348 6.00002 17 6.00002Z"
                fill="#0F172A"
              />
            </svg>

            <p>Resources</p>
          </div>
          <div className="flex flex-col font-normal text-[16px]/[22.4px]">
            <div className="flex gap-2 py-3">Help Center</div>
            <div className="flex gap-2 py-3">Blog</div>
            <div className="flex gap-2 py-3">Tutorials</div>
            <div className="flex gap-2 py-3">FAQs</div>
            <div className="flex gap-2 py-3">Community</div>
            <div className="flex gap-2 py-3">Events</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2 py-3 font-medium text-[16px]/[17.6px] items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18.59C4 18.8552 3.89464 19.1096 3.70711 19.2971C3.51957 19.4846 3.26522 19.59 3 19.59C2.73478 19.59 2.48043 19.4846 2.29289 19.2971C2.10536 19.1096 2 18.8552 2 18.59V12.5C2 6.977 6.477 2.5 12 2.5C17.523 2.5 22 6.977 22 12.5V15.586C22 15.8512 21.8946 16.1056 21.7071 16.2931C21.5196 16.4806 21.2652 16.586 21 16.586C20.7348 16.586 20.4804 16.4806 20.2929 16.2931C20.1054 16.1056 20 15.8512 20 15.586V12.5C20 10.3783 19.1571 8.34344 17.6569 6.84315C16.1566 5.34285 14.1217 4.5 12 4.5C9.87827 4.5 7.84344 5.34285 6.34315 6.84315C4.84285 8.34344 4 10.3783 4 12.5V18.59ZM4 12.5H6C6.53043 12.5 7.03914 12.7107 7.41421 13.0858C7.78929 13.4609 8 13.9696 8 14.5V19.5C8 20.0304 7.78929 20.5391 7.41421 20.9142C7.03914 21.2893 6.53043 21.5 6 21.5H4C3.46957 21.5 2.96086 21.2893 2.58579 20.9142C2.21071 20.5391 2 20.0304 2 19.5V14.5C2 13.9696 2.21071 13.4609 2.58579 13.0858C2.96086 12.7107 3.46957 12.5 4 12.5ZM4 14.5V19.5H6V14.5H4ZM18 12.5H20C20.5304 12.5 21.0391 12.7107 21.4142 13.0858C21.7893 13.4609 22 13.9696 22 14.5V19.5C22 20.0304 21.7893 20.5391 21.4142 20.9142C21.0391 21.2893 20.5304 21.5 20 21.5H18C17.4696 21.5 16.9609 21.2893 16.5858 20.9142C16.2107 20.5391 16 20.0304 16 19.5V14.5C16 13.9696 16.2107 13.4609 16.5858 13.0858C16.9609 12.7107 17.4696 12.5 18 12.5ZM18 14.5V19.5H20V14.5H18Z"
                fill="#0F172A"
              />
            </svg>

            <p>Support</p>
          </div>
          <div className="flex flex-col font-normal text-[16px]/[22.4px]">
            <div className="flex gap-2 py-3">Contact Us</div>
            <div className="flex gap-2 py-3">Developers</div>
            <div className="flex gap-2 py-3">Documentation</div>
            <div className="flex gap-2 py-3">Integrations</div>
            <div className="flex gap-2 py-3">Reports</div>
            <div className="flex gap-2 py-3">Webinar</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2 py-3 font-medium text-[16px]/[17.6px] items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5488 2.26003C12.2878 2.08709 11.9808 1.99654 11.6677 2.0001C11.3546 2.00367 11.0498 2.10119 10.7928 2.28003L2.92781 7.76003C2.50781 8.05203 2.25781 8.53003 2.25781 9.04203V14.945C2.25781 15.47 2.52181 15.959 2.95981 16.248L10.9538 21.533C11.2094 21.702 11.509 21.7921 11.8153 21.7921C12.1217 21.7921 12.4213 21.702 12.6768 21.533L20.8298 16.147C21.2678 15.857 21.5308 15.367 21.5308 14.843V9.04303C21.5308 8.51903 21.2678 8.03003 20.8308 7.74003L12.5488 2.26003ZM18.6388 8.65303L15.6248 10.676L12.7988 8.62103L12.7808 4.57903L18.6378 8.65303H18.6388ZM10.7368 4.58303V8.54003L7.83981 10.564L4.95281 8.62703L10.7368 4.58303ZM4.15981 10.576L6.02981 11.829L4.15981 13.137V10.577V10.576ZM10.7848 19.009L4.95381 15.1L7.86681 13.063L10.7868 15.021V19.011L10.7848 19.009ZM9.67981 11.796L11.5678 10.476L13.7678 11.921L11.8178 13.231L9.67981 11.796ZM12.8468 19.009V15.019L15.6368 13.149L18.6398 15.124L12.8468 19.009ZM19.4718 13.204L17.4918 11.904L19.4718 10.575V13.205V13.204Z"
                fill="#0F172A"
              />
            </svg>

            <p>Company</p>
          </div>
          <div className="flex flex-col font-normal text-[16px]/[22.4px]">
            <div className="flex gap-2 py-3">About</div>
            <div className="flex gap-2 py-3">Press</div>
            <div className="flex gap-2 py-3">Events</div>
            <div className="flex gap-2 py-3">Careers</div>
            <div className="flex gap-2 py-3">Customers</div>
            <div className="flex gap-2 py-3">Partners</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-6 gap-6">
        <p className="text-[16px]/[24.2px] font-normal">
          @ 2023 Xinder, Inc. All rights reserved.
        </p>
        <div className="flex gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.812 5.01711H6.145C3.855 5.01711 2 6.85211 2 9.11611V14.8841C2 17.1481 3.856 18.9841 6.145 18.9841H17.812C20.102 18.9841 21.957 17.1481 21.957 14.8841V9.11611C21.957 6.85211 20.101 5.01611 17.812 5.01611V5.01711ZM15.009 12.2801L9.552 14.8551C9.51872 14.8711 9.48192 14.8785 9.44503 14.8765C9.40815 14.8744 9.37237 14.8631 9.34103 14.8436C9.3097 14.824 9.28382 14.7968 9.2658 14.7646C9.24779 14.7323 9.23822 14.6961 9.238 14.6591V9.35011C9.23867 9.31299 9.24872 9.27663 9.26722 9.24444C9.28573 9.21224 9.31208 9.18526 9.34382 9.16599C9.37556 9.14673 9.41167 9.13581 9.44877 9.13425C9.48587 9.1327 9.52276 9.14057 9.556 9.15711L15.014 11.8921C15.0504 11.9102 15.0809 11.9383 15.102 11.9729C15.1232 12.0076 15.1341 12.0476 15.1336 12.0882C15.1331 12.1288 15.1211 12.1685 15.0991 12.2026C15.077 12.2367 15.0458 12.2639 15.009 12.2811V12.2801Z"
              fill="#475569"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.04623 5.865V8.613H7.03223V11.973H9.04623V21.959H13.1802V11.974H15.9552C15.9552 11.974 16.2152 10.363 16.3412 8.601H13.1972V6.303C13.1972 5.96 13.6472 5.498 14.0932 5.498H16.3472V2H13.2832C8.94323 2 9.04623 5.363 9.04623 5.865Z"
              fill="#475569"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 5.90716C21.2504 6.23454 20.4565 6.4492 19.644 6.54416C20.4968 6.0434 21.138 5.24927 21.448 4.31016C20.64 4.78049 19.7587 5.11177 18.841 5.29016C18.4545 4.88537 17.9897 4.56355 17.4748 4.34434C16.9598 4.12513 16.4056 4.01313 15.846 4.01516C13.58 4.01516 11.743 5.82516 11.743 8.05516C11.743 8.37116 11.779 8.68016 11.849 8.97516C10.2236 8.89786 8.63212 8.48257 7.17617 7.7558C5.72022 7.02903 4.43176 6.00674 3.393 4.75416C3.02883 5.36857 2.83742 6.06994 2.839 6.78416C2.8397 7.45213 3.00683 8.10939 3.32529 8.69656C3.64375 9.28372 4.1035 9.78228 4.663 10.1472C4.01248 10.1262 3.37602 9.95249 2.805 9.64016V9.69016C2.805 11.6482 4.22 13.2812 6.095 13.6532C5.74261 13.7467 5.37958 13.7941 5.015 13.7942C4.75 13.7942 4.493 13.7692 4.242 13.7192C4.51008 14.5271 5.02311 15.2315 5.70982 15.7345C6.39653 16.2375 7.22284 16.5142 8.074 16.5262C6.61407 17.6507 4.82182 18.2582 2.979 18.2532C2.647 18.2532 2.321 18.2332 2 18.1972C3.88125 19.3879 6.06259 20.0184 8.289 20.0152C15.836 20.0152 19.962 13.8582 19.962 8.51916L19.948 7.99616C20.7529 7.42983 21.4481 6.72201 22 5.90716Z"
              fill="#475569"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2V2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.018V16.017Z"
              fill="#475569"
            />
            <path
              d="M11.9823 6.81885C10.6137 6.82096 9.30184 7.36563 8.33421 8.33345C7.36658 9.30127 6.82216 10.6133 6.82031 11.9818C6.8219 13.3508 7.36634 14.6632 8.33421 15.6312C9.30209 16.5993 10.6144 17.144 11.9833 17.1458C13.3524 17.1443 14.665 16.5997 15.6331 15.6316C16.6012 14.6635 17.1457 13.3509 17.1473 11.9818C17.1452 10.6129 16.6003 9.30073 15.632 8.33304C14.6637 7.36535 13.3512 6.82117 11.9823 6.81985V6.81885ZM11.9823 15.1378C11.1456 15.1378 10.3431 14.8054 9.75139 14.2138C9.15971 13.6221 8.82731 12.8196 8.82731 11.9828C8.82731 11.1461 9.15971 10.3436 9.75139 9.75193C10.3431 9.16025 11.1456 8.82785 11.9823 8.82785C12.8191 8.82785 13.6216 9.16025 14.2132 9.75193C14.8049 10.3436 15.1373 11.1461 15.1373 11.9828C15.1373 12.8196 14.8049 13.6221 14.2132 14.2138C13.6216 14.8054 12.8191 15.1378 11.9823 15.1378Z"
              fill="#475569"
            />
            <path
              d="M17.1559 8.09509C17.8391 8.09509 18.3929 7.54127 18.3929 6.85809C18.3929 6.17492 17.8391 5.62109 17.1559 5.62109C16.4728 5.62109 15.9189 6.17492 15.9189 6.85809C15.9189 7.54127 16.4728 8.09509 17.1559 8.09509Z"
              fill="#475569"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.959 13.7189V21.0979H17.681V14.2129C17.681 12.4829 17.062 11.3029 15.514 11.3029C14.332 11.3029 13.628 12.0989 13.319 12.8679C13.206 13.1429 13.177 13.5259 13.177 13.9109V21.0979H8.897C8.897 21.0979 8.955 9.43788 8.897 8.22888H13.177V10.0529L13.149 10.0949H13.177V10.0529C13.745 9.17788 14.76 7.92688 17.033 7.92688C19.848 7.92688 21.959 9.76688 21.959 13.7189ZM4.421 2.02588C2.958 2.02588 2 2.98588 2 4.24888C2 5.48388 2.93 6.47288 4.365 6.47288H4.393C5.886 6.47288 6.813 5.48388 6.813 4.24888C6.787 2.98588 5.887 2.02588 4.422 2.02588H4.421ZM2.254 21.0979H6.532V8.22888H2.254V21.0979Z"
              fill="#475569"
            />
          </svg>
        </div>
      </div>
      <div className="pb-12 text-[12px]/[16.8px] text-left">
        In sed posuere sed ullamcorper feugiat. Lacinia elit neque, ipsum, non.
        Tellus mattis enim volutpat habitasse. Semper posuere lectus consectetur
        aliquam et ullamcorper. Dictumst aenean justo fames diam eget volutpat
        vestibulum elit. Blandit aliquet bibendum pellentesque turpis id
        penatibus faucibus id nunc. Aenean rhoncus, erat pellentesque eu. Quis
        morbi condimentum phasellus in ultricies eu amet.
      </div>
    </footer>
  );
}
