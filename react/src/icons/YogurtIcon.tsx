import React from 'react';
import config from '../config';

interface YogurtIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name YogurtIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/yogurt)
 * @see {@link https://clicons.dev/icon/yogurt}
 */
const YogurtIcon = React.forwardRef<SVGSVGElement, YogurtIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.9214 10.2725C16.477 10.8399 15.8249 11.2489 15.0731 11.3952M16.9214 10.2725C18.2293 8.60237 17.1781 6.35504 15.5911 5.75202M16.9214 10.2725C18.8538 10.2727 21.1104 12.7982 19.3857 15M4.59984 15C3.08337 13.0641 4.71115 10.6399 6.49945 10.3221M6.49945 10.3221C5.67427 5.23022 11.7071 7.01202 11.858 3.80353C11.8868 3.19088 11.5972 2.53491 10.7606 2C13.8671 2 16.0145 3.83963 15.5911 5.75202M6.49945 10.3221C7.34468 10.1719 8.26918 10.353 9 10.9247M15.5911 5.75202C15.4267 6.4945 14.8748 7.24795 13.841 7.90896'
    }
  ],
  [
    'path',
    {
      d: 'M3 15L3.82811 17.7374C4.44939 19.7911 4.76004 20.8179 5.55635 21.4089C6.35266 22 7.42546 22 9.57107 22H14.4289C16.5745 22 17.6473 22 18.4437 21.4089C19.24 20.8179 19.5506 19.7911 20.1719 17.7374L21 15'
    }
  ],
  [
    'path',
    {
      d: 'M2 15H22'
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

YogurtIcon.displayName = 'YogurtIcon';
export default YogurtIcon;
