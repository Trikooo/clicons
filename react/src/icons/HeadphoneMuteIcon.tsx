import React from 'react';
import config from '../config';

interface HeadphoneMuteIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HeadphoneMuteIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/headphone-mute)
 * @see {@link https://clicons.dev/icon/headphone-mute}
 */
const HeadphoneMuteIcon = React.forwardRef<SVGSVGElement, HeadphoneMuteIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.97651 19.6043L7.23857 14.6127C7.05341 14.1466 6.4617 13.9131 5.97493 14.0297C4.46441 14.5333 3.6462 16.1718 4.14742 17.6895L4.58543 19.0158C5.08664 20.5334 6.71747 21.3555 8.22799 20.8519C8.68896 20.6556 9.10449 20.0897 8.97651 19.6043Z'
    }
  ],
  [
    'path',
    {
      d: 'M3 3L21 21'
    }
  ],
  [
    'path',
    {
      d: 'M16.2065 16.207L15.0235 19.6048C14.8955 20.0902 15.311 20.6561 15.772 20.8524C17.1843 21.3232 18.7018 20.6352 19.3028 19.3033'
    }
  ],
  [
    'path',
    {
      d: 'M3.91512 17C3.41512 15.5 3 13.4368 3 12C3 9.51472 4.00736 7.26472 5.63604 5.63604M7.95702 3.95702C9.17263 3.34477 10.546 3 12 3C16.9706 3 21 7.02944 21 12C21 13.224 20.6987 14.9026 20.3004 16.3004'
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

HeadphoneMuteIcon.displayName = 'HeadphoneMuteIcon';
export default HeadphoneMuteIcon;
