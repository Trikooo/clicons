import React from 'react';
import config from '../config';

interface KiteIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KiteIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/kite)
 * @see {@link https://clicons.dev/icon/kite}
 */
const KiteIcon = React.forwardRef<SVGSVGElement, KiteIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 2C7.71429 4.40741 4 8 2 14C5 12 9 11 12 14C15 11 19 12 22 14C20 8 16.2857 4.40741 12 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.9999 14C10.3912 14.7327 7.69631 15.8188 8.02333 18'
    }
  ],
  [
    'path',
    {
      d: 'M11.6716 14C13.0709 17.203 9.38762 19.5 11.9053 22'
    }
  ],
  [
    'path',
    {
      d: 'M12 14C14 14 13.5 18.5 15 19'
    }
  ],
  [
    'path',
    {
      d: 'M12 14V2'
    }
  ],
  [
    'path',
    {
      d: 'M10 7.00036C10.2913 6.73558 10.6667 6.52338 11.0134 6.36376C11.379 6.19547 11.5618 6.11133 12 6.11133C12.4382 6.11133 12.621 6.19547 12.9866 6.36376C13.3333 6.52338 13.7087 6.73558 14 7.00036'
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

KiteIcon.displayName = 'KiteIcon';
export default KiteIcon;
