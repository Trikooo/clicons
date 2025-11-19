import React from 'react';
import config from '../config';

interface HandPrayerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HandPrayerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hand-prayer)
 * @see {@link https://clicons.dev/icon/hand-prayer}
 */
const HandPrayerIcon = React.forwardRef<SVGSVGElement, HandPrayerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.5 15L14 10.5C12.3432 10.4999 12 11.843 12 13.4999V15'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 15L10 10.5C11.6568 10.4999 12 11.843 12 13.4999V15'
    }
  ],
  [
    'path',
    {
      d: 'M21.9779 21.9999C20.8283 21.3294 18.8918 19.8143 16.2887 20.008C15.6292 20.057 15.2991 20.0816 14.9976 20.0584C14.696 20.0352 14.6875 20.0333 14.6706 20.0293C13.139 19.6745 12 18.3357 12 16.7382V3.19665C12 2.53578 12.5357 2.00003 13.1966 2C13.6825 1.99997 14.1202 2.29381 14.3042 2.74356L17.0224 9.38799C18.088 11.993 18.6209 13.2954 19.5497 13.9653C19.6069 14.0065 19.7128 14.0777 19.7726 14.1149C20.7443 14.721 21.1628 14.721 22 14.721'
    }
  ],
  [
    'path',
    {
      d: 'M2.02208 22C3.17173 21.3295 5.1082 19.8144 7.71127 20.008C8.37081 20.057 8.70094 20.0816 9.00245 20.0584C9.304 20.0353 9.31246 20.0333 9.32938 20.0294C10.861 19.6746 12 18.3357 12 16.7382V3.19664C12 2.53575 11.4642 2 10.8034 2C10.3175 2 9.8798 2.29382 9.69582 2.74355L6.97762 9.38804C5.91195 11.993 5.37912 13.2955 4.45028 13.9654C4.39315 14.0066 4.28717 14.0777 4.22741 14.115C3.25573 14.721 2.83715 14.721 2 14.721'
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

HandPrayerIcon.displayName = 'HandPrayerIcon';
export default HandPrayerIcon;
