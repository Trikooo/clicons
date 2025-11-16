import React from 'react';
import config from '../config';

interface VomitingIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name VomitingIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/vomiting)
 * @see {@link https://clicons.dev/icon/vomiting}
 */
const VomitingIcon = React.forwardRef<SVGSVGElement, VomitingIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4.40041 18.5C2.9039 16.752 2 14.4815 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.4815 21.0961 16.752 19.5996 18.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 8C7.97606 8.31737 8.84109 8.70974 8.9506 9.34118C8.95696 9.37783 8.96126 9.41481 8.9635 9.45195C8.98931 9.88051 8.64102 10.2537 7.94444 11M16.5 8C16.0239 8.31738 15.1589 8.70974 15.0494 9.34118C15.043 9.37783 15.0387 9.41481 15.0365 9.45195C15.0107 9.88051 15.359 10.2537 16.0556 11'
    }
  ],
  [
    'path',
    {
      d: 'M7 19C7.47273 16.7178 9.53167 15 12 15C14.4683 15 16.5273 16.7178 17 19'
    }
  ],
  [
    'path',
    {
      d: 'M12 19L12 21'
    }
  ],
  [
    'path',
    {
      d: 'M8.46546 16.5C8.46546 18.4882 8.85751 20.7325 7 22'
    }
  ],
  [
    'path',
    {
      d: 'M15.534 16.5C15.534 18.4808 15.1447 20.7344 17 22'
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

VomitingIcon.displayName = 'VomitingIcon';
export default VomitingIcon;
