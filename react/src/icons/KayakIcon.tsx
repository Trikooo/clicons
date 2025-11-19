import React from 'react';
import config from '../config';

interface KayakIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KayakIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/kayak)
 * @see {@link https://clicons.dev/icon/kayak}
 */
const KayakIcon = React.forwardRef<SVGSVGElement, KayakIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.8198 3.1806C10.9252 1.49952 2.07124 11.6154 3.03263 20.9246C12.3645 21.8836 22.505 13.0512 20.8198 3.1806Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.95898 16.9961H6.96796'
    }
  ],
  [
    'path',
    {
      d: 'M16.959 6.99612H16.968'
    }
  ],
  [
    'path',
    {
      d: 'M9.4958 14.4781C8.80348 13.7875 8.80348 12.6678 9.4958 11.9772L11.9649 9.51407C12.6572 8.82344 13.7796 8.82344 14.4719 9.51407C15.1643 10.2047 15.1643 11.3244 14.4719 12.015L12.0028 14.4781C11.3105 15.1688 10.1881 15.1688 9.4958 14.4781Z'
    }
  ],
  [
    'path',
    {
      d: 'M5.7582 5.68399C5.88051 3.29259 5.22238 2.32989 4.60371 2.05808C4.24623 1.90102 3.85728 2.09995 3.54202 2.33003C2.94876 2.76299 2.62277 3.08516 2.23608 3.68002C2.03886 3.98341 1.91293 4.36064 2.06947 4.68678C2.59441 5.78048 4.68496 5.93975 5.7582 5.68399ZM5.7582 5.68399L18.24 18.3176M18.24 18.3176C18.1192 20.7091 18.778 21.6714 19.3968 21.9428C19.7544 22.0996 20.1432 21.9005 20.4583 21.6702C21.0513 21.2368 21.3771 20.9145 21.7634 20.3194C21.9604 20.0158 22.0861 19.6385 21.9294 19.3125C21.4037 18.2191 19.3131 18.0612 18.24 18.3176Z'
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

KayakIcon.displayName = 'KayakIcon';
export default KayakIcon;
