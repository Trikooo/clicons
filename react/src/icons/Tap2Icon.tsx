import React from 'react';
import config from '../config';

interface Tap2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Tap2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tap2)
 * @see {@link https://clicons.dev/icon/tap2}
 */
const Tap2Icon = React.forwardRef<SVGSVGElement, Tap2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.2494 22.0012C16.2798 20.1362 16.2126 20.5213 16.3651 20.0469C16.5177 19.5724 17.1082 18.7482 17.4736 17.6984C18.4962 14.7597 17.9519 13.5537 16.4377 12.6174C14.8423 11.6308 13.2317 11.2482 11.8206 11.3704V6.73351C11.8206 5.7716 11.275 5.02918 10.3117 5.02918C9.34833 5.02918 8.86228 5.86682 8.86228 6.82872L8.91294 11.6642M8.89472 22.0012V21.3328C8.89472 20.5476 8.63697 20.2124 7.54691 18.6357C6.34528 16.8976 6.35032 16.8151 6.07506 16.0583C6.02633 15.705 5.72775 14.8804 6.83195 13.7301L8.91294 11.6642M8.91294 15.1907V11.6642'
    }
  ],
  [
    'path',
    {
      d: 'M6.49727 6.0232C6.4315 5.10323 6.99749 3.28328 8.55063 2.52231C9.19108 2.13281 10.949 1.52974 12.6304 2.60432C14.2874 3.66333 14.3992 5.22472 14.5035 6.01284'
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

Tap2Icon.displayName = 'Tap2Icon';
export default Tap2Icon;
