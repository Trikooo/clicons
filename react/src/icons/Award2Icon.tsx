import React from 'react';
import config from '../config';

interface Award2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Award2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/award2)
 * @see {@link https://clicons.dev/icon/award2}
 */
const Award2Icon = React.forwardRef<SVGSVGElement, Award2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 21C8 19.5858 8 18.8787 8.43934 18.4393C8.87868 18 9.58579 18 11 18H13C14.4142 18 15.1213 18 15.5607 18.4393C16 18.8787 16 19.5858 16 21V22H8V21Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 13L12 18'
    }
  ],
  [
    'path',
    {
      d: 'M6 22H18'
    }
  ],
  [
    'path',
    {
      d: 'M13.0366 2.86651L14.0925 4.99573C14.2364 5.29212 14.6204 5.57642 14.9444 5.63086L16.8582 5.95145C18.082 6.15712 18.37 7.05236 17.4881 7.9355L16.0003 9.43563C15.7483 9.68968 15.6103 10.1796 15.6883 10.5305L16.1142 12.3875C16.4502 13.8574 15.6763 14.426 14.3864 13.6578L12.5926 12.5871C12.2687 12.3935 11.7347 12.3935 11.4048 12.5871L9.61096 13.6578C8.3271 14.426 7.54719 13.8513 7.88315 12.3875L8.3091 10.5305C8.3871 10.1796 8.24911 9.68968 7.99714 9.43563L6.5093 7.9355C5.6334 7.05236 5.91537 6.15712 7.13923 5.95145L9.05302 5.63086C9.37099 5.57642 9.75494 5.29212 9.89893 4.99573L10.9548 2.86651C11.5307 1.71116 12.4666 1.71116 13.0366 2.86651Z'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

Award2Icon.displayName = 'Award2Icon';
export default Award2Icon;
