import AppColor from "../theme/AppColor";

const { default: AppImages } = require("../constants/AppImages");
const { default: AppStrings } = require("../constants/AppString");

const ProductListing = [
    {
        productId: 1,
        productName: AppStrings.menHarringtonJacket,
        productPrice: AppStrings.priceJacket,
        productImage: AppImages.imgMenJackets,
        productDescription: AppStrings.description,
        productSize: [
            {
                sizeId: 1,
                title: "Small",
                shortTitle: 'S'

            },
            {
                sizeId: 2,
                title: "Medium",
                shortTitle: 'M'

            },
            {
                sizeId: 3,
                title: "Large",
                shortTitle: 'L'

            }

        ],
        porductColor: [
            {
                colorId: 1,
                red: AppColor.red,
                orange: AppColor.orange,
                yellow: AppColor.yellow,
                white: AppColor.white,
                black: AppColor.dark,

            }
        ]
    },
    {
        productId: 2,
        productName: AppStrings.maxCirro,
        productPrice: AppStrings.priceMaxCirro,
        productImage: AppImages.imgSlipper,
        productDescription: AppStrings.description,
        productSize: [
            {
                sizeId: 1,
                title: "Small",
                shortTitle: 'S'

            },
            {
                sizeId: 2,
                title: "Medium",
                shortTitle: 'M'

            },
            {
                sizeId: 3,
                title: "Large",
                shortTitle: 'L'

            }

        ],
        porductColor: [
            {
                colorId: 1,
                red: AppColor.red,
                orange: AppColor.orange,
                yellow: AppColor.yellow,
                white: AppColor.white,
                black: AppColor.dark,

            }
        ]
    },
    {
        productId: 3,
        productName: AppStrings.pullOverHoodie,
        productPrice: AppStrings.priceOver,
        productImage: AppImages.imgHoodies1,
        productDescription: AppStrings.description,
        productSize: [
            {
                sizeId: 1,
                title: "Small",
                shortTitle: 'S'

            },
            {
                sizeId: 2,
                title: "Medium",
                shortTitle: 'M'

            },
            {
                sizeId: 3,
                title: "Large",
                shortTitle: 'L'

            }

        ],
        porductColor: [
            {
                colorId: 1,
                red: AppColor.red,
                orange: AppColor.orange,
                yellow: AppColor.yellow,
                white: AppColor.white,
                black: AppColor.dark,

            }
        ]
    },
    {
        productId: 4,
        productName: AppStrings.pullOverJakect,
        productPrice: AppStrings.fleecePrice,
        productImage: AppImages.imgHoodies,
        productDescription: AppStrings.description,
        productSize: [
            {
                sizeId: 1,
                title: "Small",
                shortTitle: 'S'

            },
            {
                sizeId: 2,
                title: "Medium",
                shortTitle: 'M'

            },
            {
                sizeId: 3,
                title: "Large",
                shortTitle: 'L'

            }

        ],
        porductColor: [
            {
                colorId: 1,
                red: AppColor.red,
                orange: AppColor.orange,
                yellow: AppColor.yellow,
                white: AppColor.white,
                black: AppColor.dark,

            }
        ]

    },
    {
        productId: 5,
        productName: AppStrings.skateHoodie,
        productPrice: AppStrings.priceSkate,
        productImage: AppImages.imgWomwnHoddies,
        productDescription: AppStrings.description,
        productSize: [
            {
                sizeId: 1,
                title: "Small",
                shortTitle: 'S'

            },
            {
                sizeId: 2,
                title: "Medium",
                shortTitle: 'M'

            },
            {
                sizeId: 3,
                title: "Large",
                shortTitle: 'L'

            }

        ],
        porductColor: [
            {
                colorId: 1,
                red: AppColor.red,
                orange: AppColor.orange,
                yellow: AppColor.yellow,
                white: AppColor.white,
                black: AppColor.dark,

            }
        ]
    },

    {
        productId: 6,
        productName: AppStrings.yellowHoodies,
        productPrice: AppStrings.priceYellow,
        productImage: AppImages.imgYellowHoddei,
        productDescription: AppStrings.description,
        productSize: [
            {
                sizeId: 1,
                title: "Small",
                shortTitle: 'S'

            },
            {
                sizeId: 2,
                title: "Medium",
                shortTitle: 'M'

            },
            {
                sizeId: 3,
                title: "Large",
                shortTitle: 'L'

            }

        ],
        porductColor: [
            {
                colorId: 1,
                red: AppColor.red,
                orange: AppColor.orange,
                yellow: AppColor.yellow,
                white: AppColor.white,
                black: AppColor.dark,

            }
        ]
    },
   

]
export default ProductListing;