import React from 'react';
import config from '../config';

interface NodeMoveDownIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name NodeMoveDownIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/node-move-down)
 * @see {@link https://clicons.dev/icon/node-move-down}
 */
const NodeMoveDownIcon = React.forwardRef<SVGSVGElement, NodeMoveDownIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.49902 7.99207V12.4876M5.49902 12.4876V13.9861C5.49902 16.8117 5.49902 18.2245 6.37746 19.1023C7.20252 19.9268 8.49991 19.977 10.9975 19.98M5.49902 12.4876H10.9975'
    }
  ],
  [
    'path',
    {
      d: 'M3.99944 1.99805H6.9986C8.81329 1.99805 8.99803 3.10688 8.99803 4.99507C8.99803 6.88327 8.81329 7.9921 6.9986 7.9921H3.99944C2.18475 7.9921 2 6.88327 2 4.99507C2 3.10688 2.18475 1.99805 3.99944 1.99805Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.998 12.4883C10.998 11.5464 10.998 11.0755 11.2909 10.7828C11.5837 10.4902 12.0549 10.4902 12.9975 10.4902C13.94 10.4902 14.4113 10.4902 14.7041 10.7828C14.9969 11.0755 14.9969 11.5464 14.9969 12.4883C14.9969 13.4301 14.9969 13.9011 14.7041 14.1937C14.4113 14.4863 13.94 14.4863 12.9975 14.4863C12.0549 14.4863 11.5837 14.4863 11.2909 14.1937C10.998 13.9011 10.998 13.4301 10.998 12.4883Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.998 19.9804C10.998 19.0386 10.998 18.5676 11.2909 18.275C11.5837 17.9824 12.0549 17.9824 12.9975 17.9824C13.94 17.9824 14.4113 17.9824 14.7041 18.275C14.9969 18.5676 14.9969 19.0386 14.9969 19.9804C14.9969 20.9223 14.9969 21.3932 14.7041 21.6858C14.4113 21.9785 13.94 21.9785 12.9975 21.9785C12.0549 21.9785 11.5837 21.9785 11.2909 21.6858C10.998 21.3932 10.998 20.9223 10.998 19.9804Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.9883 20.0659L19.391 21.6331C19.8255 22.0552 20.0884 22.1308 20.438 21.7768L22.0006 20.0782M20.0075 21.9854V13.864C19.9907 13.324 19.6313 12.0995 18.0103 11.9766'
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

NodeMoveDownIcon.displayName = 'NodeMoveDownIcon';
export default NodeMoveDownIcon;
